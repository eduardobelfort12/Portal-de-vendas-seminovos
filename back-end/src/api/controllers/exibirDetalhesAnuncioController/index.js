const knex = require("../../models/databaseConnect");

const ExibirDetalhesAnuncioController = async (req, res) => {
  if (req.params) {
    await knex
      .select("*")
      .from("cadastro_veiculos")
      .where("id", req.params.id)
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

module.exports = { ExibirDetalhesAnuncioController };
