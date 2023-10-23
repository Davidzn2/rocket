import './Contact.css'
import AirtableForm from '../../Components/Airtable/AirtableForm'
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
function Contact() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-10">


        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            ¿CÓMO PODEMOS AYUDARTE?
          </h2>

          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-700">
              Si necesitas ayuda o tienes un comentario, por favor contáctanos.
              Te responderemos tan pronto sea posible.
            </p>

            <p className="mt-6 text-center text-gray-700">
              Conoce nuestras redes sociales:
            </p>

            <ul className="mt-4 text-gray-700">
              <li className="mb-2">
                <i className="fab fa-instagram text-lg mr-2"></i>
                <a href="https://www.instagram.com/wyirock/">Instagram: wyirock</a>
              </li>
              <li className="mb-2">
                <a href="https://wa.me/5551107634">
                  <i className="fab fa-whatsapp text-lg mr-2"></i>
                  Consultas y atención por WhatsApp
                </a>
              </li>
              <li>
                <i className="far fa-envelope text-lg mr-2"></i>
                <a href="mailto:rocketchallenge1@gmail.com">rocketchallenge1@gmail.com</a>

              </li>
            </ul>

            <div className="mt-6">
              <AirtableForm base_id="appNhtOTjlFOnUTDy" table="shritb0qCp3Em22Qr" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}

export default Contact;