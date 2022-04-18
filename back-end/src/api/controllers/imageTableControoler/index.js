const knex = require("../../models/databaseConnect");

const ImgController = async (req, res) => {
  knex
    .select("*")
    .from("images")
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
