import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Strings from '../constants/Strings';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={Strings.homeScreen}>
      <Stack.Screen name={Strings.homeNavigator} component={HomeScreen} options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Image
                source={require('../../assets/ic_drawer.png')} // Adjust the path to your custom icon
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'Home',
        })} />
      <Stack.Screen name={Strings.detailScreen} component={DetailScreen}  options={{ headerShown: true } }/>
    </Stack.Navigator>
  );
}