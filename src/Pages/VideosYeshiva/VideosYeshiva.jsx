/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import LoginModal from "../../Components/LoginModal/LoginModal";

import axios from "axios";
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import ibonds from '../../assets/LOGOS/israel-bonds-logo.jpg'
import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PerfectSolutions from '../../assets/videos/PerfectSolutions_Instagram.mp4'
import HairFilter from '../../assets/videos/HairFilter_Instagram.mp4'
import DesignYourDay from '../../assets/videos/DesignYourDay_Instagram.mp4'

function VideosYeshiva() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState({})
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
    } catch (error) {
      alert(error.response.data.error);
      console.error("Error al actualizar el registro:", error);
    }
  };
  return (
    <>
      <Header />
      <div className="container  mx-auto">
        <h1 className="text-3xl font-bold text-center	m-10">Vota por tu proyecto favorito</h1>
        <div className="flex items-center justify-center ">
          <img src={ibonds} className="w-1/5" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {data.filter((record) => record.fields.YeshivaVideo)
            .map((record, index) =>

              <Card key={index} className="mt-6">
                <CardHeader color="blue-gray" className="relative ">
                  <video src={record?.fields.Video[0].url} width="400" height="200" controls />
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button onClick={() => {
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
            )
          }


        </div>
      </div>
      <Footer />
      <LoginModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />

    </>
  )
}

export default VideosYeshiva