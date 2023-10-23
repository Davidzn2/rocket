import { useState } from 'react';
import './Gallery.css';

const images = [
  '../../assets/viaje/15.HEIC',
  '../../assets/viaje/1.jpg',
  '../../assets/viaje/2.jpg',
  '../../assets/viaje/3.jpg',
  '../../assets/viaje/4.jpg',
  '../../assets/viaje/5.jpg',
  '../../assets/viaje/6.jpg',
  '../../assets/viaje/7.jpg',
  '../../assets/viaje/8.HEIC',
  '../../assets/viaje/9.HEIC',
  '../../assets/viaje/10.HEIC',
  '../../assets/viaje/11.HEIC',
  '../../assets/viaje/12.HEIC',
  '../../assets/viaje/13.HEIC',
  '../../assets/viaje/14.HEIC',
  '../../assets/viaje/16.HEIC',
  '../../assets/viaje/17.HEIC',
  '../../assets/viaje/18.HEIC',
  '../../assets/viaje/19.HEIC',
  '../../assets/viaje/20.jpg',
  '../../assets/viaje/21.jpg',
  '../../assets/viaje/22.jpg',
  '../../assets/viaje/23.jpg',
  '../../assets/viaje/24.jpg',
  '../../assets/viaje/25.jpg'
];

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carrusel">
      <button onClick={prevImage} className="prev-btn">
        &#9664;
      </button>
      <img src={images[currentImage]} alt="Carrusel" className="image" />
      <button onClick={nextImage} className="next-btn">
        &#9654;
      </button>
    </div>
  );
}

export default Gallery;