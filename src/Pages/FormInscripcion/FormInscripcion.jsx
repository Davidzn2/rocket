import React from 'react'
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
                    base_id="appuPpMhTxQnKDkyi"
                    table="shra6pvTgFOMH8DL9"
                />
            </div>
            <Footer/>
        </>
    )
}

export default FormInscripcion



