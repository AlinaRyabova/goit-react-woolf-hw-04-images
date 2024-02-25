import React, { useState, useEffect } from 'react';
import * as API from './Pixabay-api/Pixabay-api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const addImages = async () => {
      if (!searchName) return;

      try {
        setIsLoading(true);
        const data = await API.getImages(searchName, currentPage);

        if (data.hits.length === 0) {
          alert('Sorry image not found...');
          return;
        }

        const normalized = API.normalizedImages(data.hits);
        setImages(prevImages => [...prevImages, ...normalized]);
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        console.error('Something went wrong!', error);
      } finally {
        setIsLoading(false);
      }
    };

    addImages();
  }, [searchName, currentPage]);

  const handleSubmit = query => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 ? <ImageGallery images={images} /> : null}
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
};

export default App;
