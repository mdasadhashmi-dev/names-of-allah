import { ExtendedLearning, extendedLearningDb } from "./extended-learning";
import { extendedLearningBatch1 } from "./extended-learning-batch1";
import { extendedLearningBatch2 } from "./extended-learning-batch2";
import { extendedLearningBatch3 } from "./extended-learning-batch3";

export const allExtendedLearning: Record<string, ExtendedLearning> = {
  ...extendedLearningDb,
  ...extendedLearningBatch1,
  ...extendedLearningBatch2,
  ...extendedLearningBatch3,
};

export function getExtendedLearningAll(nameId: string): ExtendedLearning | undefined {
  return allExtendedLearning[nameId];
}
