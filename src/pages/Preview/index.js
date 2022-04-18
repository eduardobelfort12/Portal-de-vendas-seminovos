import React, { useState, useEffect } from "react";
import api from "../../axios/api";
import ImagesGallery from "../../components/AdmPageComponents/formularioRegistroVeiculos/imagesGallery";
export default function Testando() {
  const [push, setPush] = useState([]);
  const [url] = useState("http://localhost:5500/upload/");
  const [images, setImages] = useState([]);
  const [foto, setFoto] = useState();

  useEffect(() => {
    fetch("http://localhost:5500/listagem", {
      method: "get",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPush(data);
      });
  }, []);
  async function Multiple(e) {
    e.preventDefault();

    const form = new FormData();
    form.append(foto, "foto");

    await api
      .post("/upload", form)
      .then((response) => {
        console.log(response.data);
        alert("Upload completo!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleMultipleImages = (event) => {
    const selectFiles = [];
    const targetFiles = event.target.files;
    const targetFilesObject = [...targetFiles];

    targetFilesObject.map((file) => {
      return selectFiles.push(URL.createObjectURL(file));
    });
    setFoto(selectFiles);
  };

  return (
    <div>
      <div>
        <form encType="multipart/form-data" onSubmit={Multiple}>
          <input
            type="file"
            multiple
            name="foto"
            id="foto"
            onChange={handleMultipleImages}
          />
          <div align="center" style={{ display: "flex" }}>
            <ImagesGallery images={images} />
          </div>
          <br></br>

          <input type="submit" />
        </form>
      </div>
      {/* {push.map((items) => (
        <div>
          <img
            src={url + items.foto}
            width="150px"
            height="150px"
            alt="imagem"
          />
          <p>{items.img_id}</p>
        </div>
      ))} */}
    </div>
  );
}
