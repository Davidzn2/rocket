import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import AirtableDataFetcher from '../../Components/dataFetcher';

function Projects() {
  return (
    <>
      <Header />
      <div className="container  mx-auto">
        <h1 className="text-3xl font-bold text-center	m-10">Vota por tu proyecto favorito</h1>
        <AirtableDataFetcher />
      </div>
      <Footer />
    </>
  )
}

export default Projects