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
          base_id="appIvipfzkKGBUdv4"
          table="shrWPSBUAsiuF80Fl"
        />
        {/* <h2 className="text-4xl font-bold mb-4"> Puedes llenar tu formato de User Persona Canvas después del Business Model Canvas</h2>
        <AirtableForm
          base_id="appq8GhQuyBsGU7Lm"
          table="shrkXRtxtuDD5u3Kt"
        /> */}
      </div >
      <Footer />
    </>
  )
}

export default FormInscripcion
