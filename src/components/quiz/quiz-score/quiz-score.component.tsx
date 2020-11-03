import React, { FC } from 'react';
import styled from 'styled-components';

const StyleQuizScore = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-top: 6rem;
`;

const QuizScore: FC<{ score: number }> = ({ score }) => {
  return (
    <StyleQuizScore className="score">Your Score is: {score}</StyleQuizScore>
  );
};

export default QuizScore;
