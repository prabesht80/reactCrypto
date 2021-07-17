import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://newsapi.org/v2'
});

export default instance;

// ('https://newsapi.org/v2/everything?q=bitcoin&apiKey=41fa0658264b4a6491a1ef2a166ed53c');
