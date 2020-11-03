import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { apiClient } from '../../../config/apiClient';
import QuizScore from '../quiz-score/quiz-score.component';
import QuizAnswerList from '../quiz-answer-list/quiz-answer-list.component';

import Loading from '../../loading/loading.component';

const QuizResult: FC<{
  quiz_id: string;
}> = ({ quiz_id }) => {
  const { result } = useSelector((state: AppState) => state.quiz_result);
  const mappings = result.map(({ question, ...rest }) => rest);
  const [loading, setLoading] = useState(false);

  const [postResponse, setPostResponse] = useState<{
    score: number;
    total_score: number;
    questions: {
      ques_id: number;
      submitted_option: string;
      correct_option: string;
    }[];
  }>({
    score: 0,
    total_score: 0,
    questions: [{ ques_id: 0, submitted_option: '', correct_option: '' }],
  });

  useEffect(() => {
    setLoading(true);
    const data = {
      quiz_id,
      mappings,
    };

    const postQuizResult = async () => {
      try {
        const res = await apiClient({
          url: '/user/quiz-score',
          method: 'POST',
          data,
        });
        const postData = await res.data;
        setLoading(false);
        setPostResponse(postData);
        return postData;
      } catch (error) {
        setLoading(false);
        return error.response;
      }
    };
    postQuizResult();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <div>
      <QuizScore score={postResponse.score} />
      <QuizAnswerList questions={postResponse.questions} mappings={result} />
    </div>
  );
};

export default QuizResult;
