import React from 'react';
import Animal from './component/animal/Animal';
import Color from './component/color/Color';
import Count from './component/count/Count';

const App = () => {
  return (
    <div>
      <Color/>
      <hr/>
      <Count/>
      <hr/>
      <Animal/>
    </div>
  );
};

export default App;