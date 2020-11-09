import { StyleSheet } from 'react-native';
import Var from './Var';

const StyleText = StyleSheet.create({
  mainTitle: {
    color: Var.colorText,
    fontSize: 25,
    fontWeight: 'bold'
  },
  secondTitle: {
    fontSize: 15
  },
  colorGray: {
    color: Var.colorSecond
  },  
  textCenter: {
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default StyleText;