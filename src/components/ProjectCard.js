import React, {useEffect, useState, useReducer, useMemo} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';
import User from '../models/User';
import Repo from '../models/Repo';


const reducer = (state, action) => {
  state.collaborators = action.collaborators;
  state.commits = action.commits;
  return state;
}

const Card = (props) => {

  const navigation = props.navigation;
  const repos = props.repos;
  const user = props.user;

  const listCards = repos.map( (data) => {
    // const [state, dispatch] = useReducer(reducer, {
    //   collaborators: [],
    //   commits: 0 
    // });
  
    // const repoOption = useMemo(() => ({
    //   useRepo: async data => {
    //     let repoR = new Repo(data.user, data.repo);
    //     try {
    //       let collaborators = await repoR.getCollaborators();
    //       let commits = await repoR.getCommits();
    //       commits = commits.length;
    //       dispatch({collaborators, commits});
    //     } catch (error) {
    //       console.error("Hay un error", error);
    //     }
    //   }
    // }), []);
    
    // useEffect(() => {
    //   const getRepo = () => {
    //     repoOption.useRepo({user, repo: data})
    //       .then(() => console.log('Succes'))
    //       .catch(err => console.error(error))
    //   }
    //   getRepo();
    //   return "Please don't give me problems"
    // });
    
    return (
      <TouchableHighlight
        key={data.id}
        onPress={() => navigation.navigate('Show', {project: data})}
      >
        <View 
          style={[styles.card, StyleView.borderBottomGray]} 
        >
          <View style={styles.first}>
            <Text style={StyleText.mainTitle}> { data.name } </Text>

            {/* <View style={styles.images}>
              {state.collaborators.map( collaborator => {
                return <Image key={collaborator.id} style={[StyleImage.image, StyleImage.w30]} source={{uri: collaborator.avatar_url}}/>
              })}
            </View> */}
          </View>

          <View style={styles.middle}>
            <Text style={[StyleText.secondTitle, StyleText.colorGray]}> { data.description } </Text>
          </View>

          <View style={styles.end}>
            <Text style={[StyleText.secondTitle, StyleText.bold]}> {data.language} </Text>
            {/* <Text style={[StyleText.secondTitle, StyleText.colorGray]}> {state.commits} commits </Text> */}
          </View>
        </View>
      </TouchableHighlight> 
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

const ProjectCard = (props) => {
  const user = new User(props.user);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      setRepos( await user.getRepos() );      
    }
    getRepos();
    return console.log("Execute GET REPOS");
  });

  return (
    <Card repos={repos} user={props.user} navigation={props.navigation} />
  )

}

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