/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Var from './src/styles/Var';
import IconAw from 'react-native-vector-icons/FontAwesome';
import IconFe from 'react-native-vector-icons/Feather';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ProjectShow from './src/screens/ProjectShow';
import ProjectCreate from './src/screens/ProjectCreate';
import Info from './src/screens/Info';
import SearchUser from './src/screens/SearchUser';


const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Var.colorGreen,
        inactiveTintColor: Var.colorText,
      }}
    >
      <Tab.Screen
        name="Users"
        component={SearchUser}
        options={{
          tabBarLabel: 'Users',
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

const App: () => React$Node = () => { 
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen 
          name="Main"
          options={(route) => ({
            headerTitle: "GHreq",
            headerRight: () => {
              return  <IconFe name="log-out" size={30} onPress={() => {
                route.navigation.navigate('Login')
              }} />
            }
          })}
          component={HomeTabs}
        />
        <RootStack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>

  );
};


export default App;
