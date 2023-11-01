import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import AirtableDataFetcher from '../../Components/dataFetcher';
import ibonds from '../../assets/LOGOS/israel-bonds-logo.jpg'

function Projects() {
  return (
    <>
      <Header />
      <div className="container  mx-auto">
        <h1 className="text-3xl font-bold text-center	m-10">Vota por tu proyecto favorito</h1>
        <div className="flex items-center justify-center ">
          <img src={ibonds} className="w-1/5" alt="" />
        </div>
        <AirtableDataFetcher />
      </div>
      <Footer />
    </>
  )
}

export default Projects