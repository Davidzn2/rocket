import './Contact.css'
import AirtableForm from '../../Components/Airtable/AirtableForm'
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'

function Contact() {
  return (
    <>
      <Header />
      <div className="container  mx-auto">
        <AirtableForm
          base_id="appNhtOTjlFOnUTDy"
          table="shritb0qCp3Em22Qr"
        />
      </div>
      <Footer />
    </>
  )
}

export default Contact



