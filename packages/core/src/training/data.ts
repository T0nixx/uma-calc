import { Stat, TrainingType } from "./stat";

export const trainingTypes: TrainingType[] = [
  "speed",
  "stamina",
  "power",
  "grit",
  "intellect",
];

export const trainingTable: Record<TrainingType, Record<number, Stat>> = {
  speed: {
    1: Stat({
      speed: 10,
      power: 5,
      skillPoint: 2,
    }),
    2: Stat({
      speed: 11,
      power: 5,
      skillPoint: 2,
    }),
    3: Stat({
      speed: 12,
      power: 5,
      skillPoint: 2,
    }),
    4: Stat({
      speed: 13,
      power: 6,
      skillPoint: 2,
    }),
    5: Stat({
      speed: 14,
      power: 7,
      skillPoint: 2,
    }),
  },
  stamina: {
    1: Stat({
      stamina: 9,
      grit: 4,
      skillPoint: 2,
    }),
    2: Stat({
      stamina: 10,
      grit: 4,
      skillPoint: 2,
    }),
    3: Stat({
      stamina: 11,
      grit: 4,
      skillPoint: 2,
    }),
    4: Stat({
      stamina: 12,
      grit: 5,
      skillPoint: 2,
    }),
    5: Stat({
      stamina: 13,
      grit: 6,
      skillPoint: 2,
    }),
  },
  power: {
    1: Stat({
      power: 8,
      stamina: 5,
      skillPoint: 2,
    }),
    2: Stat({
      power: 9,
      stamina: 5,
      skillPoint: 2,
    }),
    3: Stat({
      power: 10,
      stamina: 5,
      skillPoint: 2,
    }),
    4: Stat({
      power: 11,
      stamina: 6,
      skillPoint: 2,
    }),
    5: Stat({
      power: 12,
      stamina: 7,
      skillPoint: 2,
    }),
  },
  grit: {
    1: Stat({
      grit: 8,
      speed: 4,
      stamina: 4,
      skillPoint: 2,
    }),
    2: Stat({
      grit: 9,
      speed: 4,
      stamina: 4,
      skillPoint: 2,
    }),
    3: Stat({
      grit: 10,
      speed: 4,
      stamina: 4,
      skillPoint: 2,
    }),
    4: Stat({
      grit: 11,
      speed: 5,
      stamina: 4,
      skillPoint: 2,
    }),
    5: Stat({
      grit: 12,
      speed: 5,
      stamina: 5,
      skillPoint: 2,
    }),
  },
  intellect: {
    1: Stat({
      intellect: 9,
      speed: 2,
      skillPoint: 2,
    }),
    2: Stat({
      intellect: 10,
      speed: 2,
      skillPoint: 2,
    }),
    3: Stat({
      intellect: 11,
      speed: 2,
      skillPoint: 2,
    }),
    4: Stat({
      intellect: 12,
      speed: 3,
      skillPoint: 2,
    }),
    5: Stat({
      intellect: 13,
      speed: 4,
      skillPoint: 2,
    }),
  },
};
