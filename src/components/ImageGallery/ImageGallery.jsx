import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li key={photo.id}>
              <ImageCard card={photo} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
