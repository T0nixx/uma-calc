import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Wrap,
} from "@chakra-ui/react";
import {
  addStat,
  getAllCases,
  loadSupportCard,
  scalaProductStat,
  Stat,
  StatBonus,
  TrainingType,
  trainingTypes,
} from "@uma-calc/core";
import React from "react";
import StatBonusForm from "../components/StatBonusForm";
import SupportCardForm from "../components/SupportCardForm";
import TrainingLevelForm from "../components/TrainingLevelForm";

const TrainingPage: React.FC = () => {
  const [supportCardStates, setSupportCardStates] = React.useState<
    { id: number | undefined; level: number }[]
  >([
    {
      id: undefined,
      level: 50,
    },
    {
      id: undefined,
      level: 50,
    },
    {
      id: undefined,
      level: 50,
    },
    {
      id: undefined,
      level: 50,
    },
    {
      id: undefined,
      level: 50,
    },
    {
      id: undefined,
      level: 50,
    },
  ]);
  const supportCards = React.useMemo(
    () =>
      supportCardStates
        .filter((state) => state.id !== undefined)
        .map((state) => loadSupportCard(state.id!, state.level)!),
    [supportCardStates]
  );
  const [statBonus, setStatBonus] = React.useState<StatBonus>({
    speed: 0,
    stamina: 0,
    power: 0,
    guts: 0,
    intelligence: 0,
  });
  const [trainingLevels, setTrainingLevels] = React.useState<
    Record<TrainingType, number>
  >({ speed: 1, stamina: 1, power: 1, guts: 1, intelligence: 1 });
  const [friendshipCards, setFriendshipCards] = React.useState<string[]>([]);
  const [motivation, setMotivation] = React.useState<number>(20);

  const summary: Record<
    string,
    { p5: Stat; p10: Stat; p25: Stat; p50: Stat; avg: Stat }
  > = React.useMemo(() => {
    return Object.fromEntries(
      trainingTypes.map((training) => {
        const allCases = getAllCases(
          supportCards,
          statBonus,
          friendshipCards,
          training,
          trainingLevels[training],
          motivation
        ).sort((a, b) => b.stat[training] - a.stat[training]);

        const cumulated = allCases.reduce(
          (prev, curr, i) => [
            ...prev,
            {
              stat: curr.stat,
              p: curr.p,
              pCum: (prev[i - 1]?.pCum ?? 0) + curr.p,
            },
          ],
          [] as { stat: Stat; p: number; pCum: number }[]
        );

        const p5 = cumulated.find((x) => x.pCum > 0.05)!.stat;
        const p10 = cumulated.find((x) => x.pCum > 0.1)!.stat;
        const p25 = cumulated.find((x) => x.pCum > 0.25)!.stat;
        const p50 = cumulated.find((x) => x.pCum > 0.5)!.stat;
        const avg = cumulated.reduce(
          (sum, x) => addStat(sum, scalaProductStat(x.stat, x.p)),
          Stat({})
        );

        return [
          training,
          {
            p5,
            p10,
            p25,
            p50,
            avg,
          },
        ];
      })
    );
  }, [supportCards, statBonus, trainingLevels, friendshipCards, motivation]);

  const summary2: Record<
    string,
    { p5: number; p10: number; p25: number; p50: number; avg: number }
  > = React.useMemo(() => {
    return Object.fromEntries(
      trainingTypes.map((training) => {
        const allCases = getAllCases(
          supportCards,
          statBonus,
          friendshipCards,
          training,
          trainingLevels[training],
          motivation
        ).sort(
          (a, b) =>
            Object.values(b.stat).reduce((sum, x) => sum + x, 0) -
            Object.values(a.stat).reduce((sum, x) => sum + x, 0)
        );

        const cumulated = allCases.reduce(
          (prev, curr, i) => [
            ...prev,
            {
              total: Object.values(curr.stat).reduce((sum, x) => sum + x),
              p: curr.p,
              pCum: (prev[i - 1]?.pCum ?? 0) + curr.p,
            },
          ],
          [] as { total: number; p: number; pCum: number }[]
        );

        const p5 = cumulated.find((x) => x.pCum > 0.05)!.total;
        const p10 = cumulated.find((x) => x.pCum > 0.1)!.total;
        const p25 = cumulated.find((x) => x.pCum > 0.25)!.total;
        const p50 = cumulated.find((x) => x.pCum > 0.5)!.total;
        const avg = cumulated.reduce((sum, x) => sum + x.total * x.p, 0);

        return [
          training,
          {
            p5,
            p10,
            p25,
            p50,
            avg,
          },
        ];
      })
    );
  }, [supportCards, statBonus, trainingLevels, friendshipCards, motivation]);

  const handleSupportCardChange =
    (index: number) => (form: { id: number; level: number }) => {
      setSupportCardStates([
        ...supportCardStates.slice(0, index),
        form,
        ...supportCardStates.slice(index + 1),
      ]);
    };

  return (
    <Stack padding={4} spacing={4} direction="row">
      <Stack
        maxW={1044}
        padding={4}
        spacing={4}
        borderColor="gray.100"
        borderWidth={1}
        borderRadius={4}
      >
        <Wrap spacing={4} direction="row" align="center">
          <SupportCardForm onChange={handleSupportCardChange(0)} />
          <SupportCardForm onChange={handleSupportCardChange(1)} />
          <SupportCardForm onChange={handleSupportCardChange(2)} />
          <SupportCardForm onChange={handleSupportCardChange(3)} />
          <SupportCardForm onChange={handleSupportCardChange(4)} />
          <SupportCardForm onChange={handleSupportCardChange(5)} />
        </Wrap>
        <StatBonusForm onStatBonusChange={setStatBonus} />
        <TrainingLevelForm onChange={setTrainingLevels} />
        <Box
          padding={4}
          borderColor="gray.100"
          borderWidth={1}
          borderRadius={4}
        >
          <Heading size={"sm"} marginBottom={4}>
            우정 트레이닝
          </Heading>
          <CheckboxGroup
            value={friendshipCards}
            onChange={(value: string[]) => setFriendshipCards(value)}
          >
            <Stack spacing={[1, 5]} direction={"row"}>
              {supportCards.map((card, i) => (
                <Checkbox key={i} value={card.name}>
                  {card.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </Box>
      </Stack>
      <Stack>
        <Select
          value={motivation}
          onChange={(e) => setMotivation(+e.currentTarget.value)}
        >
          <option value={20}>최상</option>
          <option value={10}>양호</option>
          <option value={0}>보통</option>
          <option value={-10}>저조</option>
          <option value={-20}>최악</option>
        </Select>
        <Box
          padding={4}
          borderColor="gray.100"
          borderWidth={1}
          borderRadius={4}
        >
          <Heading size={"sm"} marginBottom={4}>
            메인 스탯 상승량
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>스피드</Th>
                  <Th>스태미나</Th>
                  <Th>파워</Th>
                  <Th>근성</Th>
                  <Th>지능</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>평균</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>
                      {summary[training].avg[training].toFixed(1)}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>상위 5%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary[training].p5[training]}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>상위 10%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary[training].p10[training]}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>상위 25%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary[training].p25[training]}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>상위 50%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary[training].p50[training]}</Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          padding={4}
          borderColor="gray.100"
          borderWidth={1}
          borderRadius={4}
        >
          <Heading size={"sm"} marginBottom={4}>
            전체 스탯 상승량
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>누적확률</Th>
                  <Th>스피드</Th>
                  <Th>스태미나</Th>
                  <Th>파워</Th>
                  <Th>근성</Th>
                  <Th>지능</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>평균</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary2[training].avg.toFixed(1)}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>5%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary2[training].p5}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>10%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary2[training].p10}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>25%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary2[training].p25}</Td>
                  ))}
                </Tr>
                <Tr>
                  <Td>50%</Td>
                  {trainingTypes.map((training) => (
                    <Td key={training}>{summary2[training].p50}</Td>
                  ))}
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Stack>
  );
};

export default TrainingPage;
