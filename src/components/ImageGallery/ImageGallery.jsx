import React from 'react';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map((image, index) => (
        <ImageGalleryItem key={`{image.id}-${index}`} image={image} />
      ))}
    </List>
  );
};

export default ImageGallery;
