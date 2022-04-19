class Github {
  constructor(){
    this.client_id = '98b8d6c6c401fc9f1e0b';
    this.client_secret = '2b5250c819fdef98619f3a2d97b826ef04d29f02';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }

  }
}