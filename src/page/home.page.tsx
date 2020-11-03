import React from 'react';

import QuizLists from '../components/quiz/quiz-lists/quiz-lists.component';
import Title from '../components/title/title.component';
import Wrapper from '../components/wrapper/wrapper.component';

const HomePage = () => {
  return (
    <Wrapper>
      <Title />
      <QuizLists />
    </Wrapper>
  );
};

export default HomePage;
