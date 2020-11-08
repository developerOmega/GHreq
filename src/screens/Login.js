import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Var from '../styles/Var';

const Login = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        Este es el Login
      </Text>
      <Button
        title="Ingresar"
        color={Var.colorGreen}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    color: Var.colorText,
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: Var.colorGreen,
    padding: 20
  }
  
});

export default Login;