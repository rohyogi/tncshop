import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signin } from './reducers/userSlice';

import Tabs from './Tabs';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {

  const dispatch = useDispatch();

  const isLoggedIn = async() => {
    try{
      let userToken = await AsyncStorage.getItem('token');
      dispatch(signin(userToken));
    }catch(e){
      console.warn(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  

  const token = useSelector((state) => state.user.token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {token === null ? 
        <Stack.Screen name="Login" component={LoginScreen} /> :
        <>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        </>
      }

    </Stack.Navigator>
  )
}

export default StackNav;