import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import CommitCard from '../components/CommitCard';
import StyleView from '../styles/View';
import StyleText from '../styles/Text';
import StyleImage from '../styles/Images';

const ProjectShow = ({route}) => {
  const project = route.params.project;
  return (
    <ScrollView>
      <View style={StyleView.container}>
        <View style={[StyleView.header, styles.container]}>
          <View style={styles.first}>
            <Text style={[StyleText.mainTitle, StyleText.bold]}> { project.name } </Text>
            <Text style={[StyleText.fs20, StyleText.bold]} > { project.language } </Text>
          </View>
          <View style={styles.end}>
            <Image
              style={[StyleImage.image, StyleImage.w60]}
              source={require('../images/payaso.jpg')}
            />
            <View>
              <Text style={[StyleText.bold, StyleText.fs20 ]}> DeveloperOmega </Text>
              <Text style={[StyleText.colorGray, StyleText.secondTitle ]}> theskip98@gmail.com </Text>
            </View>
          </View>
        </View>

        <View style={StyleView.main}>
          <CommitCard />
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