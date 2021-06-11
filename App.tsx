import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="#090909" translucent />
      <Routes />
    </>
  );
};

export default App;
