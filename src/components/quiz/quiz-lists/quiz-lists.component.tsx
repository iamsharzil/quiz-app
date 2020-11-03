import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import { fetcher } from '../../../lib/fetcher';

import ErrorMessage from '../../error-message/error-message.component';
import Loading from '../../loading/loading.component';
import QuizList from '../quiz-list/quiz-list.component';

const StyleQuizLists = styled.ul`
  list-style: none;
  margin-top: 3rem;
`;

const QuizLists = () => {
  const { data: result, error } = useSWR(['/quiz/all/', 'GET'], fetcher);

  if (!result) {
    return <Loading loading={!result} />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <StyleQuizLists>
      {result.map((qz: QuizProps) => (
        <QuizList key={qz.id} {...qz} />
      ))}
    </StyleQuizLists>
  );
};

export default QuizLists;
