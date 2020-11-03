import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const StyleQuizWrapper = styled.div`
  background-color: ${colors.white};
  width: 80%;
  margin: 10rem auto;
  font-size: 1.6rem;
  position: relative;
  box-shadow: 2rem 2rem 3rem rgba(0, 0, 0, 0.3);
`;

const QuizWrapper: FC = ({ children }) => {
  return <StyleQuizWrapper>{children}</StyleQuizWrapper>;
};

export default QuizWrapper;
