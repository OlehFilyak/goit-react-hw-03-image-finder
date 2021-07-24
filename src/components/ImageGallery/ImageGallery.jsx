import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";
const ImageGallary = ({ images, handleSelectImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => (
        <ImageGalleryItem
          alt={tags}
          url={webformatURL}
          key={id}
          id={id}
          handleSelectImage={() => handleSelectImage(largeImageURL, tags)}
        />
      ))}
    </ul>
  );
};

ImageGallary.propTypes = {
  images: PropTypes.array.isRequired,
  handleSelectImage: PropTypes.func.isRequired,
};

export default ImageGallary;
