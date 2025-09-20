import React from 'react';
import Secondpage from './Secondpage';
import TabPage from './TabPage';
import FirstPage from './FirstPage';
import InternalCss from './InternalCss';
import AppExternal from './AppExternal';

const App = () => {
  return (
    <div>
      <AppExternal/>
      <TabPage/>
      <h2>Good Days are coming!</h2>
      <FirstPage/>
      <InternalCss/>

      
    </div>
  );
};

export default App;
