import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../button/button.component';
import QuizHead from '../quiz-head/quiz-head.component';
import QuizWrapper from '../quiz-wrapper/quiz-wrapper.component';
import QuizQuestion from '../quiz-question/quiz-question.component';

import {
  addSelectedAnswerToResult,
  setCurrentQuestion,
} from '../../../redux/quiz-result/quiz-result.actions';
import QuizTimer from '../quiz-timer/quiz-timer.component';
import { quizTimerReset } from '../../../redux/quiz-timer/quiz-timer.actions';

const QuizQuestionList = () => {
  const dispatch = useDispatch();

  const {
    quiz: { questions },
  } = useSelector((state: AppState) => state.quiz);

  const { selectedAnswer, currentQuestion } = useSelector(
    (state: AppState) => state.quiz_result,
  );

  const question = questions[currentQuestion].name;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const ques_id = questions[currentQuestion].id;
  const answers = questions[currentQuestion]?.options?.split(',');

  const handleNextQuestion = () => {
    dispatch(
      addSelectedAnswerToResult({
        ques_id,
        submitted_option: selectedAnswer,
        question,
      }),
    );
    dispatch(setCurrentQuestion(currentQuestion + 1));
    dispatch(quizTimerReset());
  };

  return (
    <>
      <QuizHead />
      <QuizTimer />
      <QuizWrapper>
        <QuizQuestion question={question} answers={answers} />
        {selectedAnswer && <Button title="Next" onClick={handleNextQuestion} />}
      </QuizWrapper>
      );
    </>
  );
};

export default QuizQuestionList;
