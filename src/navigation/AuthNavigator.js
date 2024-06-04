import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Strings from '../constants/Strings';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={Strings.loginScreen} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Strings.loginScreen} component={LoginScreen} />
    </Stack.Navigator>
  );
}