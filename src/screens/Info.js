import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Var from '../styles/Var';

const Info = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>
        Este es el Info
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

export default Info;