import * as React from 'react';
import * as ReactDOM from 'react-dom';

const MyComponent = () => {
  const [hello, setHello] = React.useState<any>('');
  React.useEffect(() => {
    fetch('https://api.github.com/users/keidarcy/repos')
      .then((res) => res.json())
      .then((res) => setHello(res));
  }, []);
  return (
    <>
      <div>hello</div>
      <pre>{JSON.stringify(hello, null, 2)}</pre>
    </>
  );
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));
