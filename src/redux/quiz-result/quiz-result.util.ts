export const addResultToList = (
  resultSummary: TQuizResult[],
  resultToAdd: TQuizResult,
) => {
  return [...resultSummary, resultToAdd];
};
