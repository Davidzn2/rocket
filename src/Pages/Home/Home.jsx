import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import Carousel from '../../Components/Carousel/CarouselWithContent';
// import Calendar from '../../Components/Calendar/Calendar'
import Gallery from '../../Components/Gallery/Gallery'
// Images
import ibonds from '../../assets/LOGOS/israel-bonds-logo.jpg'
import anahuac from '../../assets/LOGOS/Logo_Anahuac.png'
import wyi from '../../assets/LOGOS/logo_wyi-01.webp'
import Blue from '../../assets/LOGOS/Blue_Ivy_Logo.png'
import Maguen from '../../assets/LOGOS/maguen.png'
import calendar from '../../assets/calendario3.png'
function App() {
  return (
    <>
      <Header />
      <Carousel />
      <div className="container mx-auto px-4 my-20 text-center" id="Nosotros">
        <div className="p-4">
          <h2 className="text-4xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="text-gray-700 leading-loose text-2xl ">
            Rocket Challenge es el concurso de emprendimiento para todos los jóvenes de preparatoria.<br />
            Nuestra misión es brindar la formación, las herramientas, la motivación y la práctica para el
            emprendimiento a través de la experiencia.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe width="80%" height="615" src="https://www.youtube.com/embed/CZ8Ac1oQ-5I?si=6TH4MjSZqHQvsJzU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* <Gallery /> */}
      <div className="flex justify-center">

        <img src={calendar} alt="" />
      </div>

      <div className="logos p-20">
        <div className="flex w-full justify-center items-center">
          <h2 className=" text-4xl font-bold">
            Rocket Challenge existe gracias al apoyo de:
          </h2>
        </div>
        <a href="https://www.israelbonds.com/" target="_blank" rel="noopener noreferrer">
          <div className="flex h-80 w-full justify-center items-center">

            <img src={ibonds} className="h-full w-fit" alt="" />
          </div>
        </a>
        <div className="grid grid-cols-1 justify-center content-center md:grid-cols-4">
          <a href="https://www.anahuac.mx/" target="_blank" rel="noopener noreferrer">
            <img src={anahuac} className="h-fit w-fit" alt="" />
          </a>
          <a href="https://www.wyi.mx/" target="_blank" rel="noopener noreferrer">
            <img src={wyi} className="h-fit w-fit" alt="" />
          </a>
          <a href="https://www.maguendavid.com/" target="_blank" rel="noopener noreferrer">
            <img src={Maguen} className="h-fit w-fit" alt="" />
          </a>
          <a href="https://www.blueivycoaching.com/" target="_blank" rel="noopener noreferrer">
            <img src={Blue} className="h-fit w-fit" alt="" />
          </a>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
