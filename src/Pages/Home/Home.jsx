import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import Carousel from '../../Components/Carousel/CarouselWithContent';
import Calendar from '../../Components/Calendar/Calendar'
// Images
import Somos from '../../assets/rocket-somos.jpg'
import ibonds from '../../assets/LOGOS/israel-bonds-logo.jpg'
import anahuac from '../../assets/LOGOS/anahuac.png'
import wyi from '../../assets/LOGOS/logo_wyi-01.webp'
import Blue from '../../assets/LOGOS/Blue_Ivy_Logo.png'
import Maguen from '../../assets/LOGOS/maguen.png'

function App() {


  return (
    <>
      <Header />
      <Carousel />
      <div className="container mx-auto px-4 grid grid-cols-2 my-20">
        <div className="p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">¿Por qué existe Rocket Challenge?</h2>
          <p className="text-gray-700 mb-4 leading-loose">
            En la comunidad hay un número importante de personas que no tienen los conocimientos necesarios para emprender, por consiguiente muchos de los que lo intentan fracasan y muchos otros no consideran la posibilidad.
          </p>
          <p className="text-gray-700 leading-loose">
            El desempleo va en aumento, y emprender de manera formal es una solución, es por eso que queremos educar y preparar a nuestros jóvenes para que en un futuro puedan tener las herramientas necesarias para hacerlo.
          </p>
        </div>
        <div className="p-4 flex items-center justify-center">
          <img src={Somos} alt="" className="" width={200} />
        </div>
      </div>
      <div className="flex justify-center">
        <Calendar />
      </div>

      <div className="logos bg-blue-400 p-20">
        <div class="flex h-20 w-full justify-center items-center">
          <h2 className=" text-white text-4xl font-bold">
            Rocket Challenge existe gracias al apoyo de:
          </h2>
        </div>
        <div class="flex h-60 w-full justify-center items-center">
          <img src={ibonds} className="h-full w-fit" alt="" />
        </div>
        <div className="h-72 w-full  grid grid-cols-4 justify-center content-center">
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
