import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import StyleImage from '../styles/Images';
import StyleText from '../styles/Text';
import StyleView from '../styles/View';


const Card = (props) => {
  const users = props.users;
  const navigation = props.navigation;
  const listCard = users.map( user => {
    return (
      <TouchableHighlight
        key={user.id}
        onPress={() => {
          navigation.navigate('UserShow', { user })
        }}
      >
        <View style={[StyleView.borderBottomGray, styles.card]} >
          <Image
            style={[StyleImage.image, StyleImage.w80]}
            source={{uri: user.avatar_url}}
          />
          <View style={styles.info}>
            <Text style={[StyleText.bold, StyleText.fs20]}> {user.login} </Text>
            <Text style={[StyleText.colorGray, StyleText.secondTitle]}> {!user.email ? '' : user.email} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  });
  return <View>
    {listCard}
  </View>
}

const UserCard = (props) => {
  const users = !props.users ? [] : props.users;
  console.log("desde USerCard", users)

  return (
    <Card users={users} navigation={props.navigation} />
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  info: {
    paddingLeft: 20
  }
});

export default UserCard;