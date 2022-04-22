const knex = require("../../models/databaseConnect");

const EditAnuncioController = async (req, res) => {
  await knex("cadastro_veiculos")
    .where("id", req.params.id)
    .update("placa", req.body.placa)
    .then((data) => {
      console.log("Anúncio editado com sucesso!");
      console.log(data);
      return res.status(201).json({ message: "Anúncio editado com sucesso!" });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "Erro! Falha ao realizar atualização de dados!" });
    });
};
module.exports = { EditAnuncioController };
