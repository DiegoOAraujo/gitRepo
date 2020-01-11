import axios from 'axios';

class Api {
  /* //antes
  function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('Usuário não existe');
      })
  }
  getUserFromGithub('diego3g');
  getUserFromGithub('diego3g124123');
  */
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response);
    } catch (error) {
      console.warn('Erro na API');
    }
  }
}

Api.getUserInfo('DiegoOAraujo');
