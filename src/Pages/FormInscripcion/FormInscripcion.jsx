import './FormInscripcion.css'
import AirtableForm from '../../Components/Airtable/AirtableForm'
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'

function FormInscripcion() {
  return (
    <>
      <Header />
      <div className="container  mx-auto">
        <AirtableForm
          base_id="appcu8fwkEIm6Bbn9"

          table="shrF9Hov6MgYiJ5pU"
        />
        <h2 className="text-4xl font-bold mb-4"> Puedes llenar tu formato de Canvas de validación de proyecto después del Product Canvas</h2>
        <AirtableForm
          base_id="appQCUInQ1ubFGJzr"
          table="shrwLRSwHI6ZhdYfc"
        />
      </div >
      <Footer />
    </>
  )
}

export default FormInscripcion
