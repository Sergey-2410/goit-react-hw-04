const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <img src={image.urls.small} alt={image.alt_description} />
          <p>{image.description}</p>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
