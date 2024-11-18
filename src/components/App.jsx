import { useEffect, useState } from 'react';
import '../index.css';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallary/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';
import { fetchImages } from '../services/API';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImage, setSelectImage] = useState('');

  const openModal = image => {
    setSelectImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectImage('');
  };

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
      <ImageGallery modal={openModal} images={images} />
      {query && totalPages > page && <LoadMoreBtn loadMore={loadImages} />}
      {selectImage && (
        <ImageModal
          stateIsOpen={modalIsOpen}
          closeModal={closeModal}
          style={customStyles}
          image={selectImage}
        />
      )}
    </div>
  );
};

export default App;
