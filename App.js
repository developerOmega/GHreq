/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {createContext, useReducer, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconFe from 'react-native-vector-icons/Feather';
import { View, Text, Linking } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Auth from './src/models/Auth';

import Login from './src/screens/Login';
import HomeTabs from './src/navigation/Tab';

const RootStack = createStackNavigator();
const AuthContext = createContext();
const reducer = (prevState, action) => {
  switch(action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false
      }
    case 'SIGN_IN':
      return {
        ...prevState,
        userToken: action.token,
        isSignOut: false
      }
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignOut: true,
        userToken: null
      }
  }
}
const auth = new Auth;

export { AuthContext };

const Loading = () => {
  return (
    <View >
      <Text> Loading... </Text>
    </View>

  );
}

const App: () => React$Node = () => { 
  const [state, dispatch] = useReducer(reducer, {
    userToken: null,
    isLoading: true,
    isSignOut: false
  });

  
  useEffect(() => {
    const authInit = async () => {
      let userToken;
      try {
        userToken = await auth.accessToken();
      } catch (error) {
        console.error(error);
      }
      
      //
      // Agregar validacion paga redireccionar vistas
      //
  
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    } 
    authInit();

  },[]);

  const authOptions = useMemo(() => ({
    signIn: async data => {
      let token = '';
      console.log(data);

      try {
        token = await auth.verifyAuth();
        await AsyncStorage.setItem('access_token', token.access_token);
        console.log(token);

      } catch (error) {
        console.log(error);
      }

      if(!token.error) {
        console.log("No hay error");
        dispatch({type: 'SIGN_IN', token });
      }
      else{
        console.log("Si hay error");
        Linking.openURL('https://github.com/login/device');
      }
     

    },
    signOut: async () => {
      try {
        await auth.logOut();
        dispatch({type: 'SIGN_OUT'})
      } catch (error) {
        console.error(error);
      }
    },
  }), [])

  return (
    <AuthContext.Provider value={authOptions}>
      <NavigationContainer>
        <RootStack.Navigator>
          { state.isLoading ? (
            <RootStack.Screen 
              name="Loading"
              component={Loading}
            />
           ): state.userToken == null ? (
            <RootStack.Screen 
              name="Login"
              component={Login}
              options={{
                headerShown: false
              }}
            />
           ) : (
             <RootStack.Screen 
               name="Main"
               options={(route) => ({
                 headerTitle: "GHreq",
                 headerRight: () => {
                   return  <IconFe name="log-out" size={30} onPress={async () => authOptions.signOut() } />
                 }
               })}
               component={HomeTabs}
             />
           )
          }

        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>

  );
};


export default App;
