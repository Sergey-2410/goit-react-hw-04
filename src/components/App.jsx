import { useEffect } from 'react';
import '../index.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageCard from './ImageCard/ImageCard';
import ImageGallery from './ImageGallary/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

import { useState } from 'react';
import { fetchImages } from '../services/API';

const App = () => {
  const [images, setImages] = useState([]);
  // const BASE_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;
  // const API_KEY = 'sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c';

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get(BASE_URL);
  //       console.log(response);
  //       setImages(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchImages();
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { results } = await fetchImages();
  //       console.log(results);

  //       setImages(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // });

  // useEffect(() => {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: {
  //       client_id: 'sNnG1FKdyAwUMG3w6oepnJca_mAduhDNcGDiqf2jp2c',
  //       page: 1,
  //       query: 'office',
  //     },
  //   });
  // }, []);
  return (
    <div>
      <SearchBar />
      <ImageGallery images={images} />
      <ImageCard />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </div>
  );
};

export default App;
