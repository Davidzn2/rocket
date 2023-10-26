import { useState } from 'react';
import './Gallery.css';
import img1 from '../../assets/viaje/1.jpg';
import img2 from '../../assets/viaje/2.jpg';
import img3 from '../../assets/viaje/3.jpg';
import img4 from '../../assets/viaje/4.jpg';
import img5 from '../../assets/viaje/5.jpg';
import img6 from '../../assets/viaje/1.jpg';
import img7 from '../../assets/viaje/1.jpg';
import img20 from '../../assets/viaje/20.jpg';
import img21 from '../../assets/viaje/21.jpg';
import img22 from '../../assets/viaje/22.jpg';
import img23 from '../../assets/viaje/23.jpg';
import img24 from '../../assets/viaje/24.jpg';
import img25 from '../../assets/viaje/25.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25
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