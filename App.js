import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './navigations/AuthNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" />
      <AuthNavigator/>
    </NavigationContainer>
  );
};


export default App;