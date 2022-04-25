const knex = require("../../models/databaseConnect");
const FiltragemController = async (req, res) => {
  if (req.params) {
    await knex
      .select("*")
      .from("cadastro_veiculos")
      .where("marca", req.params.marca)
      .where("MODELO", req.params.MODELO)
      .then((data) => {
        console.log(data);
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Não foi possível executar query!" });
      });
  }
};

module.exports = { FiltragemController };
