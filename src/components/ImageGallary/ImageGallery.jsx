import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard
            images={image.urls.small}
            description={image.alt_description}
          />
          <div>
            <p>Description:{image.description}</p>
            <p>Likes:{image.likes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
// ({ urls: { regular, small }, id, likes, description, alt_description }
// {image.urls.regular}
