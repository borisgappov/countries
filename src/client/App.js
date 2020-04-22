import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Question1 from './features/question1/Question1';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Question 1</Link>
          </li>
          <li>
            <Link to='/question2'>Question 2</Link>
          </li>
          <li>
            <Link to='/question3'>Question 3</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/'>
            <Question1 />
          </Route>
          <Route path='/question2'>
            <Question2 />
          </Route>
          <Route path='/question3'>
            <Question3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

function Question2() {
  return (
    <div>
      <h2>Question 2</h2>
    </div>
  );
}

function Question3() {
  return (
    <div>
      <h2>Question 3</h2>
    </div>
  );
}
