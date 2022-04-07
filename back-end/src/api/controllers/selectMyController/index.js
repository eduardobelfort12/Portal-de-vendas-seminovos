const knex = require("../../models/databaseConnect");

const testeWhereController = async (req, res) => {
  await knex
    .select("proprietario", "marca", "preco")
    .from("cadastro_veiculos")
    .where("placa", req.params.placa)
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Query não realizada!" });
    });
};

module.exports = { testeWhereController };
