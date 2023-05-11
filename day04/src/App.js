import React from 'react';
import Test01 from './component/Test01';
import Test02 from './component/Test02';
import Test03 from './component/Test03';
import Todo from './component/Todo';

const App = () => {
  return (
    <div>
      <Test01/>
      <hr/>
      <Test02/>
      <hr/>
      <Test03/>
      <hr/>
      <Todo/>
    </div>
  );
};

export default App;