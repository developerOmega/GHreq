import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import StyleForm from '../styles/Form';
import Var from '../styles/Var';
import { AuthContext } from '../../App';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from '../models/Auth';

const auth = new Auth;

const Login = ({navigation}) => {
  const [code, setCode] = useState('');
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const codeDev = await auth.generateCode();
        await AsyncStorage.setItem('device_code', codeDev.device_code);
        setCode(codeDev.user_code);

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();

    return () => console.log("This will be logged on unmount");
  }, [])

  return (
    <View style={styles.main}>

      <Text style={styles.title}> GHReq </Text>
      <View style={StyleForm.form}>
        <View style={[StyleForm.field, StyleForm.padBottom50]}>
          <Text> User code </Text>
          <TextInput
              style={StyleForm.input}
              value={code}
              selectTextOnFocus={false}
          />
        </View>

        <Button
          title="access"
          color={Var.colorGreen}
          onPress={() => signIn(code)}
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