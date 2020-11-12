import React, {useState, useEffect, useReducer} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import StyleImage from '../styles/Images';
import StyleView from '../styles/View';
import StyleText from '../styles/Text';
import Loading from '../components/Loading';
import Repo from '../models/Repo';
import User from '../models/User';

const Card = (props) => {
  const commits = props.commits;
  const listCards = commits.map( commit => {

    const [isLoading, setIsLoading] = useState(true);
    const [userImg, setUserImg] = useState('');
    const userR = new User(commit.commit.committer.name);
    useEffect(() => {
      const getUserImg = async () => {
        try {
          const committerImg = await userR.getUserImgAvatar();
          setUserImg(committerImg);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
      getUserImg()
      return () => {
        console.log("Execute getUserImg");
      }
    }, []);

    return (
      <View key={commit.sha} style={[StyleView.borderBottomGray, styles.card]}>
        <Text  style={[StyleText.colorGray, StyleText.secondTitle, styles.desc]} >  
          {commit.commit.message} 
        </Text>
        {
          isLoading ? (
            <Loading />
          ) : (
            <Image
              source={{uri: userImg}}
              style={[StyleImage.image, StyleImage.w30, styles.paddingImg]}
            />
          )
        }
      </View>
    );
  });
  return <View> 
    { listCards }
  </View>
}

const CommitCard = (props) => {
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = props.user;
  const repo = props.repo;
  const repoR = new Repo(user, repo);
  

  useEffect(() => {
    const getCommits = async () => {
      try {
        const repoData = await repoR.getCommits();
        setCommits(repoData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    } 
    getCommits();
    return () => {
      console.log("Execute getCommits");
    }
  }, []); 

  return isLoading ? (
    <Loading />
  ) : (    
    <Card commits={commits} />
  )
}

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