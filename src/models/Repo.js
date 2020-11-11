import User from './User';
import Axios from 'axios';

export default class Repo extends User {
  constructor(user, repo) {
    super(user);
    this.repo = repo;
  }

  async getRepo() {
    const token = await this.accessToken();
    const commits = await Axios.get(`https://api.github.com/repos/${this.user}/${this.repo}`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    let data = commits.data;

    return data;
  }

  async getCommits() {
    const token = await this.accessToken();
    const commits = await Axios.get(`https://api.github.com/repos/${this.user}/${this.repo}/commits`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return commits.data;
  }

  async getCollaborators() {
    const token = await this.accessToken();
    const commits = await Axios.get(`https://api.github.com/repos/${this.user}/${this.repo}/collaborators`, {
      headers: {
        "Authorization": `bearer ${token}`,
      }
    });
    return commits.data;
  }
}