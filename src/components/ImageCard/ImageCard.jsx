import s from './ImageCard.module.css';
const ImageCard = ({ image, description, modalOpen }) => {
  return (
    <>
      <img
        className={s.image}
        src={image}
        alt={description}
        onClick={modalOpen}
      />
    </>
  );
};
export default ImageCard;
