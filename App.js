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
import IconFe from 'react-native-vector-icons/Feather';

import Login from './src/screens/Login';
import HomeTabs from './src/navigation/Tab';


const RootStack = createStackNavigator();

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
