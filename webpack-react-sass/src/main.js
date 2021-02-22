import { v4 } from 'uuid';
import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Yoyo } from './components/Yoyo';

const App = () => {
  return (
    <>
      <h1 className="hello">HELLO from react</h1>
      <p>nice</p>
      <section>{v4()}</section>
      <Yoyo name="haha" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
