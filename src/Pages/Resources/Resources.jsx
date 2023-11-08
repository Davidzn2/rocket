import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import fase1 from '../../assets/fase1.png'
import fase2 from '../../assets/fase2.png'
import fase3 from '../../assets/fase3.png'
import fase4 from '../../assets/fase4.png'
import bmcanvas from '../../assets/bmcanvas.png'
import userPersona from '../../assets/userPersona.png'
import concept from '../../assets/concept.png'
import entrevistas from '../../assets/entrevista.png'
import mentor from '../../assets/mentor.png'

function Recursos() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center	m-10">Recursos que te van a ayudar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1iIG8VtAUUZvBTSe6pFiEADQ0xpjgYtl3/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={fase1}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Fase 1
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1_O44yX5hTm0pmWBDjcxHO_Pr3nHEA1F8/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={fase2}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Fase 2
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1yuA5OM5y8CPmiuxye1HGLlTGBEn1Y4GC/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={fase3}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Fase 3
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1oV3ptXsWe53yG8yz1hIqEylWAZLmkUry/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={fase4}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Fase 4
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1Y_ZkXLb21ioxQdNaO6xuQFFSxkkBRkgf/view?usp=drive_link">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={bmcanvas}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Business Model canvas
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1eoevGc68gJR-Jw3SblxasXpABIxBYR7W/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={userPersona}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                User Persona Canvas
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1sUD8Jrpt-SdR8Wkoi8GLTHRWpqHVeZk6/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={concept}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Concept Card
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1i-VRaVExFRdpd3LXR6MlqtADi2VOOVlu/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={entrevistas}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Entrevistas Efectivas
              </Typography>
            </CardBody>
          </Link>
        </Card>
        <Card className="mt-6">
          <Link to="https://drive.google.com/file/d/1Y89Jwau5MEMWJ_M-FvC3rpR6lpWYAR1k/view?usp=sharing">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={mentor}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="flex flex-col">
              <Typography>
                Que debo buscar de un mentor
              </Typography>
            </CardBody>
          </Link>
        </Card>
      </div>
      <Footer />
    </>

  )
}

export default Recursos;