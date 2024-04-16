import css from "./ImageCard.module.css";

const ImageCard = ({ card, openModal }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
        loading="lazy"
        onClick={openModal}
      />
    </div>
  );
};

export default ImageCard;
