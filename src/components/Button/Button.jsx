import React from 'react';
import { ButtonLoad } from './Button.styled.jsx';

const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonLoad type="button" onClick={onClick}>
        Load More
      </ButtonLoad>
    </div>
  );
};

export default Button;
