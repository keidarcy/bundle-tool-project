import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import Good from './com';

function App() {
  return (
    <h1>
      <Good />
      ji Hello from react dom
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accpet();
}
