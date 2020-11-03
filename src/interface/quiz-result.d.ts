type TQuizResult = {
  ques_id: number | null;
  question: string | null;
  submitted_option: string | null;
};

type QuizResultState = {
  result: TQuizResult[];
  selectedAnswer: string | null;
  currentQuestion: number;
};

type QuizResultAction = {
  type: string;
  payload: TQuizResult;
};

interface IQuizSummary {
  result: TQuizResult[];
}

type DispatchType = (args: QuizResultAction) => QuizResultAction;
