import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Var from '../styles/Var';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.main}>

      <Text style={styles.title}> GHReq </Text>
      <View style={styles.form}>
        <View style={styles.field}>
          <Text> Email </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.field}>
          <Text> Password </Text>
          <TextInput 
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Button
          title="Ingresarr"
          color={Var.colorGreen}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    color: Var.colorText,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },  
  form: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  field: {
    paddingBottom: 50
  },
  input: {
    borderWidth: 1,
    borderColor: Var.colorGray,
    borderRadius: 5 
  },
  button: {
    backgroundColor: Var.colorGreen,
    padding: 20
  }
  
});

export default Login;