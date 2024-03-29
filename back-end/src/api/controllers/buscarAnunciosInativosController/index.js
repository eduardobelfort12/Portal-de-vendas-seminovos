const knex = require("../../models/databaseConnect");

const ListarAnunciosInativosController = async (req, res) => {
  await knex
    .select("*")
    .from("cadastro_veiculos")
    .whereIn("ativo", [0])
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

module.exports = { ListarAnunciosInativosController };
