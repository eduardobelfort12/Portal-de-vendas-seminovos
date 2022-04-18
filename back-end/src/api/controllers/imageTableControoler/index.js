const knex = require("../../models/databaseConnect");
const fs = require('fs')


const ImgController = async (req, res) => {
 await knex
    .select("image")
    .from("images")
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
  }


module.exports = { ImgController };
