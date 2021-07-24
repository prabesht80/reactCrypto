import axios from './newsAxios';

export const NewsApi = async (selectedOption) => {
  return await axios.get(selectedOption).then((res) => res.data.articles);
};
