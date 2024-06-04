import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Strings from '../constants/Strings';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import {Image} from 'react-native';
import FavouritesScreen from '../screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

const getScreenOptions = (label, activeIcon, inactiveIcon) => ({
    
    tabBarLabel: label,
    tabBarLabelStyle: {
      fontSize: 12, // Adjust the label font size if needed
    },
    tabBarIcon: ({ focused }) => (
      <Image
        source={focused ? activeIcon : inactiveIcon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? '#004D40' : '#00796B',
        }}
      />
    ),
    tabBarActiveTintColor: '#004D40',
    tabBarInactiveTintColor: '#00796B',
  });
  

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
         
      <Tab.Screen
        name={Strings.homeTab}
        component={HomeStackNavigator}
        
        options={{
          headerShown: false,
          ...getScreenOptions('Home', require('../../assets/ic_homeactive.png'), require('../../assets/ic_home_inactive.png')),
        }}
      />
      <Tab.Screen
        name={Strings.favouritesScreen}
        component={FavouritesScreen}
        options={{
          ...getScreenOptions('Favourites', require('../../assets/ic_fav_active.png'), require('../../assets/ic_fav_inactive.png')),headerTitle: 'Favourites',
        }}
      />
      <Tab.Screen
        name={Strings.profileScreen}
        component={ProfileScreen}
        options={{
            ...getScreenOptions('Profile', require('../../assets/ic_useractive.png'), require('../../assets/ic_user_inactive.png')),headerTitle : 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
