import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import CommitCard from '../components/CommitCard';
import StyleView from '../styles/View';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';

const ProjectShow = ({route}) => {
  const repo = route.params.repo;
  return (
    <ScrollView>
      <View style={StyleView.container}>
        <View style={[StyleView.header, styles.container]}>
          <View style={styles.first}>
            <Text style={[StyleText.mainTitle, StyleText.bold]}> { repo.name } </Text>
            <Text style={[StyleText.fs20, StyleText.bold]} > { repo.language } </Text>
          </View>
          <View style={styles.end}>
            <Image
              style={[StyleImage.image, StyleImage.w60]}
              source={require('../images/payaso.jpg')}
            />
            <View>
              <Text style={[StyleText.bold, StyleText.fs20 ]}> {repo.owner.login} </Text>
              <Text style={[StyleText.colorGray, StyleText.secondTitle ]}> { !repo.owner.email ? '' : repo.owner.email } </Text>
            </View>
          </View>
        </View>

        <View style={StyleView.main}>
          <CommitCard user={repo.owner.login} repo={repo.name} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 5,
    padding: 10,
    maxHeight: 150
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ProjectShow;