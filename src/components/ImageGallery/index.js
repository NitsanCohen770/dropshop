import React, { useState } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';
export const ImageGallery = ({ images }) => {
  const handleClick = image => {
    setActiveImageThumbnail(image);
  };
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(images[0]);
  return (
    <ImageGalleryWrapper>
      <div>
        <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              image={image}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
};
