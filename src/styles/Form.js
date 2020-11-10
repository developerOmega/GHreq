import { StyleSheet } from 'react-native';
import Var from './Var';

const StyleForm = StyleSheet.create({
  form: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  field: {
  },
  input: {
    borderWidth: 1,
    borderColor: Var.colorGray,
    borderRadius: 5 
  },
  button: {
    backgroundColor: Var.colorGreen,
    padding: 20,
    color: 'white',
    fontSize: 20,
    borderRadius: 5
  },
  padBottom50: {
    paddingBottom: 50
  },
  padBottom20: {
    paddingBottom: 20
  }
});

export default StyleForm;