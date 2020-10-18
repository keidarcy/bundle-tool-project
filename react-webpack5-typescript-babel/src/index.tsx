import React from 'react';
import ReactDOM from 'react-dom';
import { Sub } from './Sub';

const App = () => (
  <>
    <h1>
      My React and TypeScript App! {new Date().toLocaleDateString()}
      <Sub />
    </h1>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
