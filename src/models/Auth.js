import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Data from './Data';

export default class Auth extends Data {
  async generateCode() {
    const data = {
      client_id: this.clientId,
      scope: 'user repo'
    }

    const codeDevice = await Axios.post('https://github.com/login/device/code', data);
    let codeArr = codeDevice.data.split('&');

    const json = {
      device_code: codeArr[0].split('=')[1],
      expires_in: codeArr[1].split('=')[1],
      interval: codeArr[2].split('=')[1],
      user_code: codeArr[3].split('=')[1]
    } 

    return json;
  }

  async verifyAuth() {
    const data = {
      client_id: this.clientId,
      device_code: await this.deviceCode(),
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
    }
    const verify = await Axios.post('https://github.com/login/oauth/access_token', data)
    let verifyArr = verify.data.split('&');
    console.log(verifyArr[0].split('=')[0]);
    const json = verifyArr[0].split('=')[0] == 'access_token' ? {
      access_token: verifyArr[0].split('=')[1],
      scope: verifyArr[1].split('=')[1],
      token_type: verifyArr[2].split('=')[1]
    } : {
      error: "Error Verify"
    }

    return json;

  }

  async logOut () {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('device_code');
  }
}