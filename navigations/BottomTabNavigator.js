import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Screen1 from '../screens/HomePage';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) =>({
        headerShown: false,
        tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Screen2') {
                iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Screen3') {
                iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Screen4') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={35} color={"red"} />;
        },
        tabBarStyle: {
            position: 'absolute',
        },
        tabBarShowLabel: false,
    })}>
      <Tab.Screen name="Screen4" component={Screen4} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Screen3" component={Screen3} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})