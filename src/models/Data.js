// import React, {Component} from 'react'
import KeyAuth from '../../keyAuth';
import AsyncStorage from '@react-native-community/async-storage';

export default class Data {
  constructor() {
    this.clientId = KeyAuth.clientId;
  }

  async deviceCode() {
    const deviceCode = await AsyncStorage.getItem('device_code');  
    return !deviceCode ? null : deviceCode;
  }

  async accessToken() {
    const accessToken = await AsyncStorage.getItem('access_token');  
    return !accessToken ? null : accessToken;
  }

}