import Data from './Data';
import Axios from 'axios';

export default class User extends Data {
  user = '';

  constructor(user) {
    super();
    this.user = user;
  }

  async getUsers(username) {
    const token = await this.accessToken();
    const users = await Axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return users.data;
  }

  async getRepos() {
    const token = await this.accessToken();
    const repos = await Axios.get(`https://api.github.com/users/${this.user}/repos`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return repos.data;
  }

  async getRepo (nameRepo) {
    const token = await this.accessToken();
    const repos = await Axios.get(`https://api.github.com/repos/${this.user}/${nameRepo}`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return repos.data;
  }
}