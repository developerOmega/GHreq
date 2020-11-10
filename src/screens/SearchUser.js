import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserCard from '../components/UserCard';
import StyleView from '../styles/View';
import StyleForm from '../styles/Form';
import Var from '../styles/Var';

const SearchUser = ({navigation}) => {
  const { user, setUser } = useState('');
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
          <Icon style={StyleForm.button} name="search" />
        </View>
        <View style={StyleView.main}>
          <UserCard navigation={navigation} />
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