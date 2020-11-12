import React, {useReducer, useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import ProjectCard from '../components/ProjectCard';
import Loading from '../components/Loading';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';
import Var from '../styles/Var';
import My from '../models/My';

const my = new My;
const validateComponent = (validate, callback) => {
  if(validate) {
    return callback();
  } 
}

const Profile = ({route, navigation}) => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      if(route.params == undefined) {
        try {
          setProfile(await my.getProfile());
          setIsLoading(false);
        } catch (error) {
          return console.error(error);
        }
      }
      else {
        console.log("El parametro cumple")
        setProfile(route.params.user)
      } 
    }
    fetchData();

    return () => console.log("This will be logged on unmount");

  }, []);
  

  return (
    <ScrollView>
      <View style={StyleView.container}>
        <View style={StyleView.header}>
          <Image style={[StyleImage.image, StyleImage.w120, styles.image]} source={{uri: profile.avatar_url}} />
          <View style={styles.info}>
            <Text style={[StyleText.mainTitle, StyleText.textCenter]}> {profile.login} </Text>
            <Text style={[StyleText.secondTitle, StyleText.textCenter]}> {!profile.email ? '' : profile.email} </Text>
            
            {validateComponent(!route.params, () => {
              return (
                <View style={styles.padding10}>
                  <Button 
                    title="New Repo"
                    color={Var.colorGreen}
                    onPress={() => {
                      navigation.navigate('Create');
                    }}
                  />
                </View>
              ) 
            })}
            
          </View>
        </View>

        {
          isLoading ? (
            <Loading />
          ) : (
            <ProjectCard navigation={navigation} user={profile.login}/>
          )
        }
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
  },
  padding10: {
    padding: 10
  }
});

export default Profile;