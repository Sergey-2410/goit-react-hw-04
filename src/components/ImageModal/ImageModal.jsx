import Modal from 'react-modal';

const ImageModal = ({ stateIsOpen, closeModal, style, image }) => {
  return (
    <Modal
      isOpen={stateIsOpen}
      onRequestClose={closeModal}
      style={style}
      shouldCloseOnOverlayClick={true}
    >
      {image && <img src={image} alt="Selected" />}
    </Modal>
  );
};
export default ImageModal;
