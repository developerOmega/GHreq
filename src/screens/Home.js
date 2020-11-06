import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Var from '../styles/Var';

const Home = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        Este es el Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center'
  },
  title: {
    color: Var.colorText,
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Home;