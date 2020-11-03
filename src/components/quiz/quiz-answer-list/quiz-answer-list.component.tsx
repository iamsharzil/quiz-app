import React, { FC } from 'react';
import styled from 'styled-components';

import QuizWrapper from '../quiz-wrapper/quiz-wrapper.component';
import QuizAnswerHead from './head/head.component';

const StyleQuizAnswerList = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #ddd;
`;

const QuizAnswerList: FC<{
  mappings: {
    ques_id: number | null;
    question: string | null;
    submitted_option: string | null;
  }[];
  questions: {
    ques_id: number;
    submitted_option: string;
    correct_option: string;
  }[];
}> = ({ questions, mappings }) => {
  return (
    <QuizWrapper>
      <QuizAnswerHead />
      {questions.map(({ ques_id, submitted_option, correct_option }, id) => {
        const questionName = mappings.find((q) => q.ques_id === ques_id)
          ?.question;
        return (
          <StyleQuizAnswerList key={ques_id}>
            <div className={`question question-${id + 1}`}>
              Question: {questionName}
            </div>
            <div className={`submitted-answer submitted-answer-${id + 1}`}>
              Your Answer: {submitted_option}
            </div>
            <div className={`correct-answer correct-answer-${id + 1}`}>
              Correct Answer: {correct_option}
            </div>
          </StyleQuizAnswerList>
        );
      })}
    </QuizWrapper>
  );
};

export default QuizAnswerList;
