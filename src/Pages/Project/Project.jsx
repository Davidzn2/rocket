import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Project() {
  const [data, setData] = useState(null);
  const apiKey = 'patHyY2OjefFuIDOn.86253e204fdd2f636e0300f2fa54e77b0f000d44d317fe80960fb9be3fc1a669';
  const baseId = 'appuPpMhTxQnKDkyi';
  const table = 'REGISTRO';
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${table}/${id}`,
          config
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      {data && (
        <Card className="mt-6">
          <CardHeader color="blue-gray" className="relative flex">
            <img
              src={data?.fields.Logo[0].url}
              alt="card-image"
              className="object-cover w-1/2 h-48 md:h-64 lg:h-80"
            />
            {data?.fields.Video && data?.fields.Video.length > 0 ? (
              <video
                width="750"
                height="500"
                controls
                className="w-1/2 h-48 md:h-64 lg:h-80"
              >
                <source src={data?.fields.Video[0].url} type="video/mp4" />
              </video>
            ) : (
              <div className="w-1/2 h-48 md:h-64 lg:h-80 flex items-center justify-center">
                Video no disponible
              </div>
            )}Z
          </CardHeader>
          <CardBody className="flex flex-col">
            <Typography>{data?.fields['Nombre del proyecto']}</Typography>
            <Typography>{data?.fields['Describe tu proyecto']}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            {/* Agrega aquí cualquier contenido adicional que desees mostrar en el footer */}
          </CardFooter>
        </Card>
      )}
      <Footer />
    </>
  );
}

export default Project;