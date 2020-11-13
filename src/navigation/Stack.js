import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import ProjectShow from '../screens/ProjectShow';
import ProjectCreate from '../screens/ProjectCreate';
import SearchUser from '../screens/SearchUser';

const HomeStack = createStackNavigator();
const Home = () => {
 
  return (
    <HomeStack.Navigator>
      
      <HomeStack.Screen 
        name="Home"
        component={Profile}
      />
      <HomeStack.Screen 
        name="Show"
        component={ProjectShow}
      />
      <HomeStack.Screen 
        name="Create"
        component={ProjectCreate}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();


const Search = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Users"
        component={SearchUser}
      />
      <SearchStack.Screen
        name="UserShow"
        component={Profile}
      />
      <SearchStack.Screen
        name="ProjectUserShow"
        component={ProjectShow}
      />
    </SearchStack.Navigator>
  )
}


export { Home, Search };