import css from "./ImageGalleryItem.module.css";
function ImageGallery() {
  return (
    <div>
      <li className={css.ImageGalleryItem}>
        <img src="" alt="" className={css.mageGalleryItemImage} />
      </li>
    </div>
  );
}

export default ImageGallery;
