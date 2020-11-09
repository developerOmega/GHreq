import { StyleSheet } from 'react-native';
import Var from '../styles/Var';

const StyleView = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 20
  },
  header: {
    flex: 1,
    alignItems: 'stretch'
  },
  main: {
    flex: 2,
    backgroundColor: 'white',
    borderRadius: 5
  },
  borderBottomGray: {
    borderColor: 'transparent',
    borderBottomColor: Var.colorGray,
    borderWidth: 1
  }
}); 

export default StyleView;