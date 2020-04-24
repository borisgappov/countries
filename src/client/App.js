import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './app.css';
import { Question1, Question2, Question3, Question4, Question5 } from './features';

const App = (props) => {
  return (
    <ConnectedRouter history={props.history}>
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
          <li>
            <Link to='/question4'>Question 4</Link>
          </li>
          <li>
            <Link to='/question5'>Question 5</Link>
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
          <Route path='/question4'>
            <Question4 />
          </Route>
          <Route path='/question5'>
            <Question5 />
          </Route>
        </Switch>
      </div>
    </ConnectedRouter>
  );
};

export default App;
