import { v4 } from 'uuid';
import './style/main.scss';
import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Yoyo } from './components/Yoyo';

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 2);
  });
  return (
    <>
      <h1 className="hello">HELLO from react</h1>
      <p>nice</p>
      <section>{v4()}</section>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
      <Yoyo name="ha not bad" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
