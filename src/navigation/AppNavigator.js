import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '../utils/AuthContext';
import Strings from '../constants/Strings';

const Stack = createStackNavigator();

export default function AppNavigator() {
    const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name={Strings.mainNavigator} component={MainNavigator} />
        ) : (
          <Stack.Screen name={Strings.authNavigator} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}