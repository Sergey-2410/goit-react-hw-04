import axios from 'axios';

export const fetchImages = async () => {
  const BASE_URL = 'https://api.unsplash.com/';
  const API_KEY = 'sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c';
  const responce = await axios.get(BASE_URL, {
    params: {
      client_id: API_KEY,
      page: 1,
      query: 'office',
    },
  });
  return responce.data.results;
};
