import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Var from '../styles/Var';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        <Icon name="gitlab" />
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