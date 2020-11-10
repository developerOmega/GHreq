import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import StyleForm from '../styles/Form';
import Var from '../styles/Var';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.main}>

      <Text style={styles.title}> GHReq </Text>
      <View style={StyleForm.form}>
        <View style={[StyleForm.field, StyleForm.padBottom50]}>
          <Text> Email </Text>
          <TextInput
            style={StyleForm.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={[StyleForm.field, StyleForm.padBottom50]}>
          <Text> Password </Text>
          <TextInput 
            style={StyleForm.input}
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
  }  
});

export default Login;