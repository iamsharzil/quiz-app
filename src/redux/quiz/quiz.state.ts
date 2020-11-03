export const QUIZ_INITIAL_STATE = {
  quiz: {
    name: null,
    description: null,
    questions: [
      {
        id: null,
        name: null,
        options: null,
        quiz: null,
        points: null,
      },
    ],
  },
  isFetching: false,
  errorMessage: undefined,
};
