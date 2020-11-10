import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox' 
import { RadioButton } from 'react-native-paper';
import StyleView from '../styles/View';
import StyleText from '../styles/Text';
import StyleForm from '../styles/Form'
import Var from '../styles/Var';

const Info = (props) => {
  const name = props.name,
        setName = props.setName,
        description = props.description,
        setDescription = props.setDescription; 
  return (
    <View style={[StyleView.box, styles.marginB20]}>
      <Text style={[StyleText.fs20, StyleText.bold, StyleForm.padBottom20]}> Info </Text>
      <View style={StyleForm.field, StyleForm.padBottom20}>
        <Text> name </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={StyleForm.input}
        />
      </View>

      <View style={StyleForm.field, StyleForm.padBottom20}>
        <Text> Description </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={StyleForm.input}
        />
      </View>
    </View>
  );
}

const Status = (props) => {
  const status = props.status, setStatus = props.setStatus;

  return (
    <View style={[StyleView.box, styles.marginB20]}>
      <Text style={[StyleText.fs20, StyleText.bold, StyleForm.padBottom20]}> Status </Text>
      <View style={[StyleForm.field, StyleForm.padBottom20, styles.status]}>
        <RadioButton
          value="public"
          status={ status == 'public' ? 'checked' : 'unchecked' }
          onPress={() => setStatus('public')}
          color={Var.colorGreen}
        />
        <View>
          <Text style={[StyleText.secondTitle, StyleText.bold, {color: Var.colorGray2}]}> Public </Text>
          <Text style={StyleText.secondTitle, StyleText.colorGray}> 
            Anyone on the internet can see this repository. You choose who can commit.
          </Text>
        </View>
      </View>

      <View style={[StyleForm.field, StyleForm.padBottom20, styles.status]}>
        <RadioButton
          value="private"
          status={ status == 'private' ? 'checked' : 'unchecked' }
          onPress={() => setStatus('private')}
          color={Var.colorGreen}
        />
        <View>
          <Text style={[StyleText.secondTitle, StyleText.bold, {color: Var.colorGolden}]}> Private </Text>
          <Text style={StyleText.secondTitle, StyleText.colorGray}> 
            Anyone on the internet can see this repository. You choose who can commit.
          </Text>
        </View>
      </View>
    </View>
  );
}

const Initialize = (props) => {
  const readme = props.readme, setReadme = props.setReadme,
        gitIgnore = props.gitIgnore, setGitIgnore = props.setGitIgnore;
  return (
    <View style={[StyleView.box, styles.marginB20]}>
      <Text style={[StyleText.fs20, StyleText.bold, StyleForm.padBottom20]}> Readme </Text>
      <View style={[StyleForm.field, StyleForm.padBottom20, styles.initialize]}>
        <CheckBox 
          value={readme}
          onValueChange={setReadme}
        />
        <Text style={StyleText.secondTitle}> Add a README file </Text>
      </View>

      <View style={[StyleForm.field, StyleForm.padBottom20, styles.initialize]}>
        <CheckBox 
          value={gitIgnore}
          onValueChange={setGitIgnore}
        />
        <Text style={StyleText.secondTitle}> Add .gitignore </Text>
      </View>
    </View>
  );
}

const ProjectCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription ] = useState('');
  const [status, setStatus] = useState('public');
  const [readme, setReadme ] = useState(false);
  const [gitIgnore, setGitIgnore ] = useState(false);

  return (
    <ScrollView>
      <View style={StyleView.container}>

        <Info
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />    

        <Status 
          status={status}
          setStatus={setStatus}
        />

        <Initialize 
          readme={readme}
          setReadme={setReadme}
          gitIgnore={gitIgnore}
          setGitIgnore={setGitIgnore}
        />

        <Button
          title="Create repository"
          color={Var.colorGreen}
        />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  marginB20: {
    marginBottom: 20
  },
  status: {
    flexDirection: 'row',
  },
  initialize: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ProjectCreate;