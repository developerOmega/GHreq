import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserCard from '../components/UserCard';
import StyleView from '../styles/View';
import StyleForm from '../styles/Form';
import Loading from '../components/Loading';
import User from '../models/User';

const SearchUser = ({navigation}) => {
  const [ user, setUser ] = useState('');
  const [ users, setUsers ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getUser = async () => {
    const userR = new User(user);
    let arrUsers = [];
    setIsLoading(true);
    try {
      const userData = await userR.getUsers();
      arrUsers.push(userData);
      setUsers(arrUsers);
      console.log('users Var', userData);
      console.log("users Arr", users);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <ScrollView>
      <View style={StyleView.container} >
        <View style={[StyleView.header, styles.form]}>
          <View style={[StyleForm.field, styles.input]}>
            <Text> Usuario </Text>
            <TextInput 
              style={StyleForm.input}
              value={user}
              onChangeText={setUser}
            /> 
          </View>
          <Icon style={StyleForm.button} name="search" onPress={getUser} />
        </View>
        <View style={StyleView.main}>
          {
            isLoading ? (
              <Loading />
            ) : (
              <UserCard navigation={navigation} users={users} />
            )
          }
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    maxHeight: 120
  },
  input: {
    flex: 3,
    paddingRight: 10
  }
});

export default SearchUser;