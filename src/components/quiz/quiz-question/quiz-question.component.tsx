import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../utils/colors';

import QuizAnswers from '../quiz-answers/quiz-answers.component';

type QuizQuestionProps = {
  question: string | null;
  answers: string[] | undefined;
};

const StyleQuizQuestion = styled.div`
  .question {
    font-size: 3rem;
    font-weight: bold;
    border-bottom: 1px solid ${colors.darkGrey};
    padding: 1rem;
  }

  ul {
    list-style: none;
  }
`;

const QuizQuestion: FC<QuizQuestionProps> = ({ question, answers }) => {
  return (
    <StyleQuizQuestion>
      <div className="question">{question}</div>
      <ul>
        {answers?.map((answer, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <QuizAnswers key={id} answer={answer} id={id} />
        ))}
      </ul>
    </StyleQuizQuestion>
  );
};

export default QuizQuestion;
