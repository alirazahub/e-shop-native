import React, { useEffect, useState } from 'react';
import HomePage from './screens/HomePage';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './navigations/AuthNavigator';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    async function checkToken() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    }
    checkToken();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" />
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Navigator> */}
      <AuthNavigator/>
    </NavigationContainer>
  );
};


export default App;