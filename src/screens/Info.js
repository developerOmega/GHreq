import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import StyleText from '../styles/Text';
import StyleView from '../styles/View';
import Var from '../styles/Var';

const Info = () => {
  return (
    <View style={[StyleView.container]}>
      <View style={styles.container}>

        <Text style={[StyleText.mainTitle, styles.paddingBottom]}>
          GHReq info
        </Text>
        <Text style={[StyleText.secondTitle, styles.paddingBottom]}>
          Esta es una App móvil creada por Daniel Mendoza (DeveloperOmega), sobre la librería React Native.
        </Text>

        <Text style={[StyleText.secondTitle, styles.paddingBottom]}>
          Consume el API de GitHub por lo que se realiza una autenticación Oauth2 en el login; consume
          los request de usuarios, proyectos y commits; además el usuario tiene la capacidad
          de crear nuevos repositorios. 
        </Text>

        <Text style={[StyleText.secondTitle, styles.paddingBottom]}>
          Para más información consultar mis redes.
        </Text>

        <View style={styles.iconContainer}>
          <Icon
            style={[styles.fs40, {color: Var.colorLinkedin}]}
            name="linkedin-square"
          />
          <Text style={[StyleText.secondTitle, StyleText.fs20, styles.paddingLeft]}>
            Daniel Mendoza
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <IconMC
            style={[styles.fs40, {color: Var.colorGmail}]}
            name="gmail"
          />
          <Text style={[StyleText.secondTitle, StyleText.fs20, styles.paddingLeft]}>
            theskip98@gmail.com 
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <IconMC
            style={[styles.fs40, {color: Var.colorText}]}
            name="web"
          />
          <Text style={[StyleText.secondTitle, StyleText.secondTitle, styles.paddingLeft]}>
            http://developeromega.herokuapp.com/
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon
            style={[styles.fs40, {color: Var.colorTwitter}]}
            name="twitter-square"
          />
          <Text style={[StyleText.secondTitle, StyleText.fs20, styles.paddingLeft]}>
            @DeveloperOmega
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon
            style={[styles.fs40, {color: Var.colorFacebook}]}
            name="facebook-square"
          />
          <Text style={[StyleText.secondTitle, StyleText.fs20, styles.paddingLeft]}>
            @developerOmega
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paddingBottom: {
    paddingBottom: 20
  },
  paddingLeft: {
    paddingLeft: 10
  },
  fs40: {
    fontSize: 40
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  }

});

export default Info;