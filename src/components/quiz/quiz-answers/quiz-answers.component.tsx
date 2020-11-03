import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedAnswer } from '../../../redux/quiz-result/quiz-result.actions';

type QuizAnswerProps = {
  answer: string;
  id: number;
};

const StyleQuizAnswer = styled.li`
  border-bottom: 1px solid #ccc;

  display: flex;
  align-items: center;

  .input-wrapper {
    background-color: #ddd;
    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .answer-value {
    font-size: 1.6rem;
    margin-left: 1rem;
  }
`;

const QuizAnswers: FC<QuizAnswerProps> = ({ answer, id }) => {
  const dispatch = useDispatch();
  const { selectedAnswer } = useSelector(
    (state: AppState) => state.quiz_result,
  );

  return (
    <StyleQuizAnswer>
      <div className="input-wrapper">
        <input
          onChange={() => dispatch(getSelectedAnswer(answer))}
          checked={selectedAnswer === answer}
          type="radio"
          name="answer"
          id={`answer-${id + 1}`}
        />
      </div>
      <div className={`answer-value answer-value-${id + 1}`}>{answer}</div>
    </StyleQuizAnswer>
  );
};

export default QuizAnswers;
