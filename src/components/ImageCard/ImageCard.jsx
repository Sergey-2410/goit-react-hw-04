const ImageCard = ({ images, description }) => {
  return (
    <div>
      <img src={images} alt={description} />
    </div>
  );
};
export default ImageCard;
