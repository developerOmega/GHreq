import Data from './Data';
import Axios from 'axios';

export default class My extends Data {  
  async getProfile() {
    const token = await this.accessToken();
    const user = await Axios.get('https://api.github.com/user', {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    } );
    return user.data;
  }

  async getRepos() {
    const token = await this.accessToken();
    const repos = await Axios.get('https://api.github.com/user/repos', {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return repos.data;
  }
}