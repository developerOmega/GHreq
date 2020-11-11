
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAw from 'react-native-vector-icons/FontAwesome';
import Var from '../styles/Var';
import Info from '../screens/Info';
import { Home, Search } from './Stack';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Var.colorGreen,
        inactiveTintColor: Var.colorText
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          headerTitle: "Hola",
          tabBarIcon: ({color, size}) => {
            return <IconAw name="search" color={color} size={size} />
          }
        }}
      />
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',  
          tabBarIcon: ({color, size}) => {
            return <IconAw name='home' color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({color, size}) => {
            return <IconAw name='info' color={color} size={size} />            
          }
        }}
      />
    </Tab.Navigator>

  );
}

export default HomeTabs;