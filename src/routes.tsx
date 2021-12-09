import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import FormContact from './screens/FormContact';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#121212',
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="FormContact" component={FormContact} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
