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
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10
  }
}); 

export default StyleView;