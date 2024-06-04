import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import Strings from '../constants/Strings';
import HomeStackNavigator from './HomeStackNavigator';
import CustomDrawer from '../components/CustomDrawer';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
       <Drawer.Screen name={Strings.homeScreen} component={BottomTabNavigator} options={{ headerShown: false ,headerTitle: 'Home'}} />
      <Drawer.Screen name={Strings.notificationsScreen} component={NotificationScreen} options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Image
                source={require('../../assets/ic_drawer.png')} // Adjust the path to your custom icon
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'Notifications',
        })}  />
    </Drawer.Navigator>
  );
}