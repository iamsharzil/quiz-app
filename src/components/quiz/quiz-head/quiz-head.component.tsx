import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/root-reducer';
import { colors } from '../../../utils/colors';

const StyleQuizHead = styled.div`
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
  font-weight: bold;
`;

const QuizHead = () => {
  const {
    quiz: { name },
  } = useSelector((state: RootState) => state.quiz);

  return <StyleQuizHead>{name}</StyleQuizHead>;
};

export default QuizHead;
