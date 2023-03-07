import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../screens/authentication/SignInScreen"
import SignUpScreen from '../screens/authentication/SignUpScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ForgetPassword from '../screens/authentication/ForgetPassword'
import Welcome from '../screens/welcome/Welcome';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      <Stack.Screen name="Sign In"
      screenOptions={{
        
      }}
        options={{
          title: 'Welcome to E Shop',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
          },
          headerBackVisible: false,
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Info"
          //     color="#fff"
          //   />
          // ),
        }} component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Forget Password" component={ForgetPassword} />
      <Stack.Screen options={{ headerShown: false }} name="Main" component={BottomTabNavigator}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator;