import React, { useState } from 'react';
import { View, StatusBar, Button, LogoTitle } from 'react-native';
import HomePage from './screens/HomePage';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen name="home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;