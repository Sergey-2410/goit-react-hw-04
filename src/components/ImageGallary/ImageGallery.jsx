import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, modal }) => {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <a href="#" onClick={e => e.preventDefault()}>
              <ImageCard
                image={image.urls.small}
                description={image.alt_description}
                modalOpen={() => modal(image.urls.regular)}
              />
            </a>

            <div>
              <p>
                Description:
                {image.description ? image.description : image.alt_description}
              </p>
              <p>Likes:{image.likes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ImageGallery;
