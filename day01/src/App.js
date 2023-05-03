import React from 'react';
import Dog from './component/Dog';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Test3 from './component/Test3';
import Test4 from './component/Test4';
import Test5 from './component/Test5';

const App = () => {
  return ( 
    /* 최상단을 반드시 div로 감싸야한다. */
    <div>
      <Dog /> 
      <hr />
      <Dog /> 
      <hr />
      <Test1 />
      <hr />
      <Test2 />
      <hr />
      <Test3 />
      <hr />
      <Test4 />
      <hr />
      <Test5 />
    </div>
  );
};

export default App;


// <Dog /> → 이런 태그들을 컴포넌트라고 한다.