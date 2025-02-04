import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Wrap,
} from "@chakra-ui/react";
import { pickup } from "@uma-calc/core";
import React from "react";
import { useForm } from "react-hook-form";

interface GachaForm {
  targetDraw: number;
  currentDraw: number;
  ceilPoint: number;
  jewelLeft: number;
  p: number;
}

const GachaPage: React.FC = () => {
  const { register, getValues } = useForm<GachaForm>({
    defaultValues: {
      targetDraw: 5,
      currentDraw: 0,
      ceilPoint: 0,
      jewelLeft: 0,
      p: 0.0075,
    },
  });
  const [avg, setAvg] = React.useState<number>(0);
  const [hope, setHope] = React.useState<number>(0);
  const [despair, setDespair] = React.useState<number>(0);
  const [summary, setSummary] = React.useState<{ title: string; p: number }[]>(
    []
  );

  function handleCalculate() {
    const { targetDraw, currentDraw, ceilPoint, jewelLeft, p } = getValues();
    const log = pickup(targetDraw, ceilPoint + currentDraw * 200, p);
    setAvg(log.reduce((sum, x) => sum + x.p * x.count, 0));

    const drawLeft = Math.floor(jewelLeft / 1500) * 10;
    setHope(
      log.filter((x) => x.count <= drawLeft).reduce((sum, x) => sum + x.p, 0)
    );

    const despiarLog = pickup(
      targetDraw,
      ceilPoint + currentDraw * 200 + drawLeft,
      p
    );
    setDespair(despiarLog.reduce((sum, x) => sum + x.p * x.count, 0));

    setSummary(
      Array.from({ length: targetDraw - currentDraw }, (_, k) => [
        {
          title: `${k}천장 + @`,
          p: log
            .filter((x) => x.ceilCount === k + currentDraw && !x.isCeil)
            .reduce((sum, x) => sum + x.p, 0),
        },
        {
          title: `${k + 1}천장`,
          p:
            log.find((x) => x.ceilCount === k + currentDraw && x.isCeil)?.p ??
            0,
        },
      ]).flat()
    );
  }

  function renderPercent(value: number) {
    return (value * 100).toFixed(4) + "%";
  }

  return (
    <Wrap padding={4} spacing={4}>
      <Stack
        padding={4}
        borderColor="gray.100"
        borderWidth={1}
        borderRadius={4}
        maxWidth={480}
      >
        <FormControl>
          <FormLabel>목표 돌파수</FormLabel>
          <Select {...register("targetDraw", { valueAsNumber: true })}>
            <option value={5}>풀돌</option>
            <option value={4}>3돌</option>
            <option value={3}>2돌</option>
            <option value={2}>1돌</option>
            <option value={1}>명함</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>현재 돌파수</FormLabel>
          <Select {...register("currentDraw", { valueAsNumber: true })}>
            <option value={4}>3돌</option>
            <option value={3}>2돌</option>
            <option value={2}>1돌</option>
            <option value={1}>명함</option>
            <option value={0}>없음</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>현재 천장 포인트</FormLabel>
          <Input {...register("ceilPoint", { valueAsNumber: true })} />
        </FormControl>
        <FormControl>
          <FormLabel>남은 쥬얼 개수</FormLabel>
          <Input {...register("jewelLeft", { valueAsNumber: true })} />
        </FormControl>
        <FormControl>
          <FormLabel>픽업 확률</FormLabel>
          <Select {...register("p")}>
            <option value={0.0075}>0.75%</option>
            <option value={0.005}>0.5%</option>
          </Select>
        </FormControl>
        <Button onClick={handleCalculate}>계산</Button>
      </Stack>
      <Box
        borderColor="gray.100"
        minWidth={360}
        borderWidth={1}
        borderRadius={4}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>천장 횟수</Th>
                <Th isNumeric>확률</Th>
              </Tr>
            </Thead>
            <Tbody>
              {summary.map(({ title, p }) => (
                <Tr key={title}>
                  <Td>{title}</Td>
                  <Td isNumeric>{renderPercent(p)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Stack
        borderColor="gray.100"
        minWidth={360}
        borderWidth={1}
        borderRadius={4}
        padding={4}
      >
        <Stat>
          <StatLabel>목표까지 필요한 가챠 횟수 평균</StatLabel>
          <StatNumber>{avg.toFixed(0)} 회</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>목표까지 필요한 쥬얼 평균</StatLabel>
          <StatNumber>{(avg * 150).toFixed(0)} 쥬얼</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>남은 쥬얼로 목표 달성할 확률</StatLabel>
          <StatNumber>{renderPercent(hope)}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>
            남은 쥬얼로 목표 달성 실패시 추가로 필요한 쥬얼 평균
          </StatLabel>
          <StatNumber>{(despair * 150).toFixed(0)} 쥬얼</StatNumber>
        </Stat>
      </Stack>
    </Wrap>
  );
};

export default GachaPage;
