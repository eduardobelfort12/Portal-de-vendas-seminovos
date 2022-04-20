import React, { useState } from "react";
import api from "../../axios/api";
export default function Testando() {
  const [image, setImage] = useState();

  async function SaveImages(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    api
      .post("/base64")
      .then((response) => {
        console.log(response.data);
        alert("Upload realizado com sucesso!");
        setImage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <form onSubmit={SaveImages} encType="multipart/form-data">
        <input type="file" name="image" multiple />
        <input type={"submit"} />
      </form>
    </div>
  );
}
