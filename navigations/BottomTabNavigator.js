import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../screens/Message';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) =>({
        headerShown: false,
        tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'chat') {
                iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
            } else if (route.name === 'home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'cart') {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'profile') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={35} color={"red"} />;
        },
        tabBarShowLabel: false,
        tabBarStyle:{
            position:'absolute',
    },
    })}>
      <Tab.Screen name="home" component={HomePage} />
      <Tab.Screen name="chat" component={Message} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator