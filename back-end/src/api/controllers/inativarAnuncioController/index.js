const knex = require("../../models/databaseConnect");

const InativarAnuncioController = async (req, res) => {
  console.log(req.params.id);
  await knex("cadastro_veiculos")
    .where("id", req.params.id)
    .update("ativo", req.body.ativo)
    .then((data) => {
      console.log(data);
      console.log("Anuncio inativado");
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "Erro! Não foi possível inativar anúncio ",
      });
    });
};

module.exports = { InativarAnuncioController };
