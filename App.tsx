import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import MainNav from './src/navigation';
const App = () => {
  return (
    <>
      {/* <StatusBar backgroundColor={color.primery} /> */}
      <MainNav />
    </>
  );
};

export default App;
