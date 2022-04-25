const knex = require("../../models/databaseConnect");

const ImageInsertController = async (req, res) => {
  console.log(req.body);
  if (req.files) {
    await knex(`images`)
      .insert({ foto: req.files })
      .then((data) => {
        console.log(data);
        return res.json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.json({ message: `Erro! deu ruim demais` });
      });
  }
};

module.exports = { ImageInsertController };
