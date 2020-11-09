import { StyleSheet } from 'react-native';
import Var from './Var';

const StyleForm = StyleSheet.create({
  form: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  field: {
    paddingBottom: 50
  },
  input: {
    borderWidth: 1,
    borderColor: Var.colorGray,
    borderRadius: 5 
  },
  button: {
    backgroundColor: Var.colorGreen,
    padding: 20
  }
});

export default StyleForm;