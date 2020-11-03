import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  addSelectedAnswerToResult,
  setCurrentQuestion,
} from '../../../redux/quiz-result/quiz-result.actions';
import {
  quizTimerReset,
  quizTimerStart,
} from '../../../redux/quiz-timer/quiz-timer.actions';
import { colors } from '../../../utils/colors';

const StyleQuizTimer = styled.div`
  background-color: ${colors.white};
`;

const QuizTimer = () => {
  //   const [seconds, setSeconds] = useState(10);

  const { timer } = useSelector((state: AppState) => state.quiz_timer);

  const {
    quiz: { questions },
  } = useSelector((state: AppState) => state.quiz);

  const { currentQuestion } = useSelector(
    (state: AppState) => state.quiz_result,
  );
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const ques_id = questions[currentQuestion].id;
  const question = questions[currentQuestion].name;

  useEffect(() => {
    let interval: number | undefined;

    if (timer > 0) {
      interval = setInterval(() => {
        dispatch(quizTimerStart());
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      dispatch(quizTimerReset());

      dispatch(
        addSelectedAnswerToResult({
          ques_id,
          submitted_option: null,
          question,
        }),
      );
      dispatch(setCurrentQuestion(currentQuestion + 1));
    }

    return () => clearInterval(interval);
  }, [currentQuestion, dispatch, ques_id, question, timer]);

  return (
    <StyleQuizTimer>
      <div className="time-bar">
        Time Remaining : 0:{timer < 10 ? `0${timer}` : timer} / 0:15 seconds
      </div>
    </StyleQuizTimer>
  );
};

export default QuizTimer;
