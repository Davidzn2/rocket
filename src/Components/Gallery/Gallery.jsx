import { useState } from 'react';
import './Gallery.css';

const images = [
  'src/assets/viaje/1.jpg',
  'src/assets/viaje/2.jpg',
  'src/assets/viaje/3.jpg',
  'src/assets/viaje/4.jpg',
  'src/assets/viaje/5.jpg',
  'src/assets/viaje/6.jpg',
  'src/assets/viaje/7.jpg',
  'src/assets/viaje/20.jpg',
  'src/assets/viaje/21.jpg',
  'src/assets/viaje/22.jpg',
  'src/assets/viaje/23.jpg',
  'src/assets/viaje/24.jpg',
  'src/assets/viaje/25.jpg'
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
    <div className="container flex">
      <div className="w-1/2 p-8 flex justify-center items-center">
        <h2 className="text-5xl font-bold">Así se vivió Rocket Challenge 2022</h2>
      </div>
      <div className="w-1/2 p-8">
        <div className="carrusel flex items-center">
          <button onClick={prevImage} className="prev-btn">
            &#9664;
          </button>
          <img src={images[currentImage]} alt="Carrusel" className="image" />
          <button onClick={nextImage} className="next-btn">
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;