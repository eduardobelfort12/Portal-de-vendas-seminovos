import React from "react";

function ImagesGallery({ images }) {
  return (
    <div align="center"  className="row">
      {images.map((url) => {
        return (
          <div style={{padding: "80px"}} className="col-sm-1">
            <div align="center" >
              <img  src={url} alt="imagem" width="150px" height="150px" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImagesGallery;
