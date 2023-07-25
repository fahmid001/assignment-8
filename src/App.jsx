import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IncomePage from './components/IncomePage';
import ExpensePage from './components/ExpensePage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/income">
            <IncomePage />
          </Route>
          <Route path="/expense">
            <ExpensePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;