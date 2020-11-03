type QuizProps = {
  id: number;
  name: string;
  description: string;
};

type TQuizQuestions = {
  id: number | null;
  name: string | null;
  options: string | null;
  quiz: number | null;
  points: number | null;
};

interface IQuiz {
  name: string | null;
  description: string | null;
  questions: TQuizQuestions[];
}

type QuizCategoryState = {
  quiz: IQuiz;
  isFetching: boolean;
  errorMessage: undefined;
};

type QuizTimerState = {
  timer: number;
};

type QuizAction = {
  type: string;
  payload: IQuiz;
};

interface IQuizSummary {
  result: TQuizResult[];
}

type DispatchType = (args: QuizAction) => QuizAction;

type AppState = {
  quiz: QuizCategoryState;
  quiz_result: QuizResultState;
  quiz_timer: QuizTimerState;
};
