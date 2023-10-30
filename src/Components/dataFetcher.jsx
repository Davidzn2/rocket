import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const AirtableDataFetcher = () => {
  const [data, setData] = useState([]);
  const apiKey = 'patHyY2OjefFuIDOn.86253e204fdd2f636e0300f2fa54e77b0f000d44d317fe80960fb9be3fc1a669';
  const baseId = 'appuPpMhTxQnKDkyi';
  const table = 'REGISTRO';
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${baseId}/${table}/`,
          config
        );
        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const likeProject = async (record_id, likes) => {
    console.log(record_id, likes)
    try {
      const response = await axios.patch(
        `https://api.airtable.com/v0/${baseId}/${table}/${record_id}`,
        {
          fields: {
            Likes: likes + 1
          },
        },
        config
      );
      console.log(data.id)
      console.log(data)
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((record, index) => {
        if (record.fields.Aprobado) {
          return (
            <div key={index}>
              <Card className="mt-6">
                <Link to={`/proyecto/${record.id}`}>
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={record.fields.Logo[0].url}
                      alt="card-image"
                      className="object-cover w-full h-full"
                    />
                  </CardHeader>
                  <CardBody className="flex flex-col">
                    <Typography>{record.fields['Nombre del proyecto']}</Typography>
                    {/* <Typography>{record.fields['Describe tu proyecto']}</Typography> */}
                  </CardBody>
                </Link>

                <CardFooter className="pt-0">
                  {/* <Button onClick={() => likeProject(record.id, record.fields.Likes)}>Dar like a este proyecto</Button> */}
                  {/* <Typography>Likes: {record.fields.Likes}</Typography> */}
                </CardFooter>
              </Card>
            </div >
          )
        }
      })}

    </div >
  );
};


export default AirtableDataFetcher;