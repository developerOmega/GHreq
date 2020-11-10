import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';

const Profile = ({route, navigation}) => {
  const user = !route.params ? {
    name: 'DeveloperOmega',
    email: 'theskip98@gmail.com',
    img: require('../images/payaso.jpg') 
  } : route.params.user;

  return (
    <ScrollView>
      <View style={StyleView.container}>
        <View style={StyleView.header}>
          <Image style={[StyleImage.image, StyleImage.w120, styles.image]} source={user.img} />
          <View style={styles.info}>
            <Text style={[StyleText.mainTitle, StyleText.textCenter]}> {user.name} </Text>
            <Text style={[StyleText.secondTitle, StyleText.textCenter]}> {user.email} </Text>
          </View>
        </View>

        <ProjectCard navigation={navigation} />
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  info:{
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 50,
    paddingBottom: 10,
    position: 'relative',
    zIndex: 1,
    bottom: 50
  },
  image: {
    alignSelf: 'center',
    position: 'relative',
    zIndex: 2
  }
});

export default Profile;