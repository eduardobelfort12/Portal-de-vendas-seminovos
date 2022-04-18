const knex = require("../../models/databaseConnect");

const ImageInsertController = async (req, res) => {
  await knex("images")
    .insert("foto", req.files.toString("base64"))
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! deu ruim" });
    });
};

module.exports = { ImageInsertController };
