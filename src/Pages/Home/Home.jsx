import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import Carousel from '../../Components/Carousel/CarouselWithContent';
import Calendar from '../../Components/Calendar/Calendar'
// Images
import ibonds from '../../assets/LOGOS/israel-bonds-logo.jpg'
import anahuac from '../../assets/LOGOS/Logo_Anahuac.png'
import wyi from '../../assets/LOGOS/logo_wyi-01.webp'
import Blue from '../../assets/LOGOS/Blue_Ivy_Logo.png'
import Maguen from '../../assets/LOGOS/maguen.png'

function App() {


  return (
    <>
      <Header />
      <Carousel />
      <div className="container mx-auto px-4 my-20 text-center" id="Nosotros">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="text-gray-700 leading-loose">
            Rocket Challenge es el concurso de emprendimiento para todos los jóvenes de preparatoria. <br />
            Nuestra misión es brindar la formación, las herramientas, la motivación y la práctica para el emprendimiento a través de la experiencia
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Calendar />
      </div>

      <div className="logos p-20">
        <div className="flex w-full justify-center items-center">
          <h2 className=" text-4xl font-bold">
            Rocket Challenge existe gracias al apoyo de:
          </h2>
        </div>
        <div className="flex h-80 w-full justify-center items-center">
          <img src={ibonds} className="h-full w-fit" alt="" />
        </div>
        <div className="grid grid-cols-1 justify-center content-center md:grid-cols-4">
          <img src={anahuac} className="h-fit w-fit" alt="" />
          <img src={wyi} className="h-fit w-fit" alt="" />
          <img src={Maguen} className="h-fit w-fit" alt="" />
          <img src={Blue} className="h-fit w-fit" alt="" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
