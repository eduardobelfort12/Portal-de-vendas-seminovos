const knex = require("../../models/databaseConnect");

const filtrarDadosController = async (req, res) => {
  console.log(req.params.marca, req.params.MODELO);
  await knex
    .select(
      "marca",
      "MODELO",
      "ANO",
      "image",
      "preco",
      "ar_condicionado",
      "direcao_hidraulica",
      "controle_tracao",
      "multimidia",
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

module.exports = { filtrarDadosController };
