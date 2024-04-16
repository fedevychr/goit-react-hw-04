import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id} className={css.item}>
              <ImageCard card={photo} openModal={() => openModal(photo)} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
