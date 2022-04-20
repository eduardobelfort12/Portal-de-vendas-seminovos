const knex = require("../../models/databaseConnect");

const ImageInsertController = async (req, res) => {

console.log(req.files)
  if( req.files.length === 2 ){
  knex("images")
    .insert({ img: req.files[0].filename.toString('base64') })
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! deu ruim" });
    });
  }

  };


module.exports = { ImageInsertController };
