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

  async setRepo(data) {
    const token = await this.accessToken();

    if(!data.gitignore_template) {
      delete data.gitignore_template;
    }
    else {
      data.gitignore_template = 'nanoc';
    } 

    const repo = await Axios.post('https://api.github.com/user/repos', data, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });

    return repo.data;
  }
}