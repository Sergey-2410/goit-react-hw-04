import { useEffect, useState } from 'react';
import '../index.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallary/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';
import { fetchImages } from '../services/API';
const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // useEffect(() => {
  //   if (totalPages=== page) {
  //   }
  // },[]);

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === '') return;
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setTotalPages(total_pages);
        setImages(prev => [...prev, ...results]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleQuery = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const loadImages = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
      {totalPages > page && <LoadMoreBtn loadMore={loadImages} />}
      <ImageModal />
    </div>
  );
};

export default App;
// {
//   error && (
//     <h2>Whoops, something went wrong! Please try reloading this page!</h2>
//   );
// }
