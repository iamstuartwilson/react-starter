// Deps
import ReactDOM from 'react-dom';
import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/routes/home';
import Json from './components/routes/json';

// in JSX you always need a <closing /> tag.
// <hr> will not compile
// <hr /> will!
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/json">JSON Example</Link></li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/json" exact component={Json} />
    </div>
  </Router>,
  document.querySelector('[data-react-root]')
);
