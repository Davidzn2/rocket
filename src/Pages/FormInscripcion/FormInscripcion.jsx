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
          base_id="appBeKR9KD274TXf2"
          table="shr8D7fvLQNq1ENie"
        />
      </div>
      <Footer />
    </>
  )
}

export default FormInscripcion
