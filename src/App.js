import React from 'react';
import { Router, Link, Redirect } from '@reach/router';
import Home from './views/Home';
import Value from './views/Value';
import Color from './views/Color';

function App() {
  return (
    <>
      <Link to="/home">Homepage</Link>
      <Router>
        <Home path="/home"></Home>
        <Value path="/:value"></Value>
        <Color path="/:word/:color/:background"></Color>
      </Router>
    </>
  );
}

export default App;
