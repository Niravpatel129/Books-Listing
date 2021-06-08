import axios from 'axios';

axios.defaults.baseURL = 'http://openlibrary.org/';

const useAxios = () => {
  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);

      return result.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchData };
};

export default useAxios;
