import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../screens/authentication/SignInScreen"
import SignUpScreen from '../screens/authentication/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ForgetPassword from '../screens/authentication/ForgetPassword'

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In"
        options={{
          title: 'Welcome',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',

          },

        }} component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} />
      <Stack.Screen name="Main" component={BottomTabNavigator} screenOptions={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;