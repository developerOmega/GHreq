import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const _onPressButton = () => {
  alert('You tapped the button!');
}

const HolaMundo = ({navigation}) => {
  return (
    <View style={styles.centerContent} >
      <Text style={styles.title}> Hola Mundo </Text>
      

      <Button
        title="Press Me"
        onPress={() => {
          navigation.navigate('OtherPage', {name: 'Jane'});
        }}
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  centerContent: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  }
});


export default HolaMundo;