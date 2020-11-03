import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../../utils/colors';

const StyleQuizList = styled.li`
  background-color: ${colors.white};
  padding: 2rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .start-quiz {
    cursor: pointer;
    text-decoration: none;
    background-color: ${colors.green};
    padding: 1rem;
    border: none;
    border-radius: 2px;
    color: ${colors.white};
  }
`;

const QuizList: FC<QuizProps> = ({ id, name, description }) => {
  return (
    <StyleQuizList>
      <div>
        <h3 className={`quiz-list-${id}`}>{name}</h3>
        <Link to={`/quiz/${id}`}>
          <button type="button" className={`start-quiz start-quiz-${id}`}>
            Start
          </button>
        </Link>
      </div>
      <p>{description}</p>
    </StyleQuizList>
  );
};

export default QuizList;
