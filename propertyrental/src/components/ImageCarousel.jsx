import React from 'react';
import ReactDOM from 'react-dom';

export default function ImageCarousel({ images }) {
  const [show, setShow] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <img
        src={images[0]}
        alt="property thumbnail"
        className="clickable"
        onClick={() => setShow(true)}
      />
      {show && ReactDOM.createPortal(
        <div className="modal-overlay" onClick={() => setShow(false)}>
          <div className="modal image-carousel" onClick={e => e.stopPropagation()}>
            <button className="carousel-btn" onClick={prev}>‹</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="carousel-btn" onClick={next}>›</button>
          </div>
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  );
}
