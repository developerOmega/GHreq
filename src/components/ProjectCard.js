import React, {useEffect, useState, useReducer} from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';
import Loading from '../components/Loading';
import User from '../models/User';
import Repo from '../models/Repo';


const reducer = (state, action) => {
  state.collaborators = action.collaborators;
  state.commits = action.commits;
  return state;
}

const Card = (props) => {
  const navigation = props.navigation;
  const user = props.user;  
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const getRepos = () => {
      
      const userR = new User(user);
      userR.getRepos()
        .then((data) => {
          setRepos(data);
          setIsLoading(false)
          console.log("Repositorio: ", repos);
        })
        .catch((error) => console.error(error))

      // try {
      //   setRepos( await userR.getRepos() );      
      //   setIsLoading(false);
      // } catch (error) {
      //   console.error(error)
      // }
    }
    // userR.getUsers(user);
    getRepos();

    return () => () => {
      console.log("Effect")
    }

  }, []);


  const listCards = repos.map( (data) => {
    // const [state, dispatch] = useReducer(reducer, {
    //   collaborators: [],
    //   commits: 0 
    // });
    // let repoR = new Repo(user, data.name);
    
    // useEffect(() => {
    //   const getRepo = async () => {
    //     try {
    //       let collaborators = await repoR.getCollaborators();
    //       let commits = await repoR.getCommits();
    //       // commits = commits.length;
    //       dispatch({collaborators, commits});
    //     } catch (error) {
    //       console.error("Hay un error", error);
    //     }
    //   }
    //   getRepo();

    //   return () => {
    //     console.log("Please don't give me problems");
    //   } 
    // }, []);
    
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
    <View>
      {
        isLoading ? (
          <Loading />
        ) : (
          <View  style={StyleView.main}> 
            {listCards} 
          </View >
        )
      }
    </View>
  );
}

const ProjectCard = (props) => {

  return (
    <Card user={props.user} navigation={props.navigation} />
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