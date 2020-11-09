import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';

const Card = (props) => {
  const projects = props.projects;
  const listCards = projects.map( (project) => {
    return (
      <View style={[styles.card, StyleView.borderBottomGray]} key={project.id}>
        <View style={styles.first}>
          <Text style={StyleText.mainTitle}> { project.name } </Text>
          <View style={styles.images}>
            {project.collaborators.map( collaborator => {
              return <Image style={[StyleImage.image, StyleImage.w30]} source={collaborator.img}/>
            })}
          </View>
        </View>

        <View style={styles.middle}>
          <Text style={[StyleText.secondTitle, StyleText.colorGray]}> { project.description } </Text>
        </View>

        <View style={styles.end}>
          <Text style={[StyleText.secondTitle, StyleText.bold]}> {project.language} </Text>
          <Text style={[StyleText.secondTitle, StyleText.colorGray]}> {project.commits} commits </Text>
        </View>
      </View> 
    )
  } );

  return (
    <View  style={StyleView.main}> 
      {listCards} 
    </View >
  );
}


const projects = [
  {
    id: 1,
    name: "TaskLab",
    description: "Enviroment to manage projects",
    language: "Vue",
    commits: 32,
    collaborators: [
      { img: require('../images/perfil.jpg') },
      { img: require('../images/payaso.jpg') }
    ]
  },
  {
    id: 2,
    name: "CampusBay",
    description: "College plarform to request notes",
    language: "PHP",
    commits: 56,
    collaborators: [
      { img: require('../images/payaso.jpg') }
    ],
  },
  {
    id: 3,
    name: "TaskLabApi",
    description: "TaskLab's Api",
    language: "PHP",
    commits: 56,
    collaborators: [
      { img: require('../images/payaso.jpg') }
    ],
  },
  {
    id: 4,
    name: "TaskLabApi",
    description: "TaskLab's Api",
    language: "JavaScript",
    commits: 78,
    collaborators: [
      { img: require('../images/payaso.jpg') }
    ],
  },
  {
    id: 5,
    name: "DevOmega",
    description: "Web page by DeveloperOmega",
    language: "PHP",
    commits: 67,
    collaborators: [
      { img: require('../images/payaso.jpg') }
    ],
  }
];

const ProjectCard = () => <Card projects={projects} />

const styles = StyleSheet.create({
  images: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    padding: 10
  },
  first: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  middle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  end: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ProjectCard;