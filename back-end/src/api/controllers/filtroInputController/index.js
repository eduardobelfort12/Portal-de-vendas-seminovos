const knex = require("../../models/databaseConnect");

const FiltroInputModeloController = async (req, res) => {
  await knex
    .select("*")
    .from("cadastro_veiculos")
    .distinctOn("MODELO")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

const FiltroInputMarcaController = async (req, res) => {
  await knex
    .select("*")
    .from("cadastro_veiculos")
    .distinctOn("marca")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

module.exports = { FiltroInputModeloController, FiltroInputMarcaController };
