import axios from 'axios';

export const fetchImages = async () => {
  const BASE_URL =
    'https://api.unsplash.com/photos/?client_id=sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c';
  const response = await axios.get(BASE_URL);
  return response.data;
};
