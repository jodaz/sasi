import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div></div>
  );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
