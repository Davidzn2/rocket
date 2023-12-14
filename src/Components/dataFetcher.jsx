/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import LoginModal from "./LoginModal/LoginModal";
const AirtableDataFetcher = (props) => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const apiKey =
    "patHyY2OjefFuIDOn.86253e204fdd2f636e0300f2fa54e77b0f000d44d317fe80960fb9be3fc1a669";
  const baseId = "appuPpMhTxQnKDkyi";
  const table = "REGISTRO";
  const config = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.airtable.com/v0/${baseId}/${table}/`,
        config
      );
      setData(response.data.records);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const likeProject = async (record_id) => {
    console.log(record_id);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/vote`,
        {
          record_id,
        },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      alert(`Te quedan ${3 - response.data.votes} votos`);
      fetchData();
    } catch (error) {
      alert(error.response.data.error);
      console.error("Error al actualizar el registro:", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.filter((record) => record.fields.Aprobado)
          .sort((a, b) => b.fields.Likes - a.fields.Likes)
          .slice(0, props.projects || data.length)
          .map((record, index) => {
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
                        <Typography>
                          {record.fields["Nombre del proyecto"]}
                        </Typography>
                        {/* <Typography>{record.fields['Describe tu proyecto']}</Typography> */}
                      </CardBody>
                    </Link>

                    <CardFooter className="pt-0">
                      <Button
                        onClick={() => {
                          if (localStorage.getItem("token") === null) {
                            setIsOpen(true);
                          } else {
                            likeProject(record.id);
                          }
                        }}
                      >
                        ❤️
                      </Button>

                      <Typography>Likes: {record.fields.Likes}</Typography>
                    </CardFooter>
                  </Card>
                </div>
              );
            }
          })}
      </div>
      <LoginModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AirtableDataFetcher;
