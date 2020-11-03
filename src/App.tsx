import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './page/home.page';
import QuizPage from './page/quiz.page';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/quiz/:id" component={QuizPage} />
      </Switch>
    </Router>
  );
}

export default App;
