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
  const repos = props.repos;

  const listCards = repos.map( (data) => {
    const [state, dispatch] = useReducer(reducer, {
      collaborators: [],
      commits: 0 
    });
    let repoR = new Repo(user, data.name);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const getRepo = async () => {
        try {
          let collaborators = await repoR.getCollaborators();
          let commits = [];
          // commits = commits.length;
          setIsLoading(false)
          dispatch({collaborators, commits});
        } catch (error) {
          console.error("Hay un error", error);
        }
      }
      getRepo();

      return () => {
        console.log("Please don't give me problems");
      } 
    }, []);
    
    return (
      <TouchableHighlight
          key={data.id}
          onPress={() => navigation.navigate('Show', {repo: data})}
      >
        {
          isLoading ? (
            <Loading />
          ) : (
            
            <View 
              style={[styles.card, StyleView.borderBottomGray]} 
            >
              <View style={styles.first}>
              
                <Text style={[StyleText.mainTitle, styles.flex2]}> { data.name } </Text>
                <View style={[styles.images, styles.flex1]}>
                  {state.collaborators.map( collaborator => {
                    return <Image key={collaborator.id} style={[StyleImage.image, StyleImage.w30]} source={{uri: collaborator.avatar_url}}/>
                  })}
                </View>
              </View>

              <View style={styles.middle}>
                <Text style={[StyleText.secondTitle, StyleText.colorGray]}> { data.description } </Text>
              </View>

              <View style={styles.end}>
                <Text style={[StyleText.secondTitle, StyleText.bold]}> {data.language} </Text>
                {/* <Text style={[StyleText.secondTitle, StyleText.colorGray]}> commits </Text> */}
              </View>
            </View>
             
          )
        }  
      </TouchableHighlight>
    )
  } );

  return (
    <View>
      <View  style={StyleView.main}> 
        {listCards} 
      </View >
    </View>
  );
}

const ProjectCard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const userR = new User(props.user);
  
  useEffect(() => {
    const getRepos = async () => {
      let reposData = [];
      console.log("Este es el token: ", props.user)
      try {
        reposData = await userR.getRepos();
        setRepos(reposData);
        setIsLoading(false)
      } catch (error) {
        console.error(error);
      }

    }
    getRepos();

    return () => () => {
      console.log("Effect")
    }

  }, []);



  return (
    <View>
      {
        isLoading ? (
          <Loading />
        ) : (
          <Card repos={repos} user={props.user} navigation={props.navigation} />
        )
      }
    </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  flex1: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  flex2: {
    flex: 3
  }
});

export default ProjectCard;