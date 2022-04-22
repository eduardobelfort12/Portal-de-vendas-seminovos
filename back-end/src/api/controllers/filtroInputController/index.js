const knex = require("../../models/databaseConnect");

const filtroInputController = async (req, res) => {
  await knex
    .select("*")
    .from("cadastro_veiculos")
    .distinctOn("marca", "MODELO")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

module.exports = { filtroInputController };
