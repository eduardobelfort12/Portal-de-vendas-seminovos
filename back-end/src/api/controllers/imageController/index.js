const knex = require("../../models/databaseConnect");
const Buffer = require('buffer')

const fs = require("fs");
const ImageInsertController = async (req, res) => {
let buf = new Buffer()

  await knex("images")
    .insert({ image: req.file.buf.toString('base64') })
    .then((data) => {
      fs.writeFileSync()  
      console.log(data);

      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! deu ruim" });
    });
};

module.exports = { ImageInsertController };
