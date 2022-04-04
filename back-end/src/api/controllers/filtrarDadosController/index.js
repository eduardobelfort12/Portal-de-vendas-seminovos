const knex = require('../../models/databaseConnect')


const filtrarDadosController = async (req, res) => {
    console.log(req.params.marca, req.params.modelo);
    await knex
      .select(
        "marca",
        "modelo",
        "image",
        "preco",
        "opcionais",
        "torque",
        "entreeixo",
        "tiposuspensao",
        "potencia",
        "km"
      )
      .from("cadastro_veiculos")
      .where("marca", req.params.marca)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
      });
  };

  module.exports = {filtrarDadosController}