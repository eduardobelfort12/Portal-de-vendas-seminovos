const knex = require("../../models/databaseConnect");

const ImgController = async (req, res) => {
  await knex
    .select("*")
    .from("images")
    .where({ id: req.params.id })
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
};

module.exports = { ImgController };
