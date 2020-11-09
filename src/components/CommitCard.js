import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';
import StyleText from '../styles/Text';

const Card = (props) => {
  const commits = props.commits;
  const listCards = commits.map( commit => {
    return (
      <View style={[StyleView.borderBottomGray, styles.card]}>
        <Text  style={[StyleText.colorGray, StyleText.secondTitle, styles.desc]} >  
          {commit.description} 
        </Text>
        <Image
          source={commit.collaborator.img}
          style={[StyleImage.image, StyleImage.w30, styles.paddingImg]}
        />
      </View>
    );
  });
  return <View> 
    { listCards }
  </View>
}

const commits = [
  {
    id: 1,
    description: "Agregar todas las tareas al index",
    collaborator: {
      img: require('../images/payaso.jpg')
    }
  },
  {
    id: 2,
    description: "Crear nueva variable de entorno",
    collaborator: {
      img: require('../images/perfil.jpg')
    }
  },
  {
    id: 3,
    description: "Crear comandos con yargs para crear comandos en data base",
    collaborator: {
      img: require('../images/perfil.jpg')
    }
  },
  {
    id: 4,
    description: "Agregar API a index",
    collaborator: {
      img: require('../images/payaso.jpg')
    }
  },
  {
    id: 5,
    description: "Agregar sockets para tabla de mensajes",
    collaborator: {
      img: require('../images/payaso.jpg')
    }
  },
  {
    id: 6,
    description: "Agregar query TaskByUsers para que el usuario pueda ver sus tareas",
    collaborator: {
      img: require('../images/perfil.jpg')
    }
  }
]

const CommitCard = () => <Card commits={commits} />

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  desc: {
    flex: 1,
    paddingRight: 15,
  }
});

export default CommitCard;