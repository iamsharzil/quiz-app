import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import useSWR from 'swr';

import ErrorMessage from '../components/error-message/error-message.component';
import Loading from '../components/loading/loading.component';
import QuizQuestionList from '../components/quiz/quiz-question-list/quiz-question-list.component';
import QuizResult from '../components/quiz/quiz-result/quiz-result.component';

import { fetcher } from '../lib/fetcher';

import {
  fetchQuizFailure,
  fetchQuizStart,
  fetchQuizSuccess,
} from '../redux/quiz/quiz.actions';

const QuizPage: FC<QuizPageProps> = ({ match }) => {
  const {
    params: { id },
  } = match;

  const { data, error } = useSWR([`/quiz-questions/all/${id}`, 'GET'], fetcher);

  const { currentQuestion } = useSelector(
    (state: AppState) => state.quiz_result,
  );

  const dispatch = useDispatch();

  if (data) {
    dispatch(fetchQuizSuccess(data));
  }

  if (!data) {
    dispatch(fetchQuizStart());
    return <Loading loading={!data} />;
  }

  if (error) {
    dispatch(fetchQuizFailure('OOP! Something went wrong...'));
    return <ErrorMessage />;
  }

  return (
    <>
      {currentQuestion < data.questions.length ? (
        <QuizQuestionList />
      ) : (
        <QuizResult quiz_id={id} />
      )}
    </>
  );
};

export default withRouter(QuizPage);
