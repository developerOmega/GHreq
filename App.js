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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ProjectShow from './src/screens/ProjectShow';
import ProjectCreate from './src/screens/ProjectCreate';
import Info from './src/screens/Info';
import SearchUser from './src/screens/SearchUser';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />

          <Stack.Screen
            name="Home"
            component={Home}
          />
          
          <Stack.Screen
            name="ProjectShow"
            component={ProjectShow}
          />

          <Stack.Screen
            name="ProjectCreate"
            component={ProjectCreate}
          />

          <Stack.Screen
            name="SearchUser"
            component={SearchUser}
          />

          <Stack.Screen
            name="Info"
            component={Info}
          />
        </Stack.Navigator>
      
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
