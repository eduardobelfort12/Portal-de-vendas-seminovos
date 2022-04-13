const knex = require('../../models/databaseConnect')

const InativarAnuncioController = async (req, res) => {
    console.log(req.params.id);
    await knex("cadastro_veiculos")
      .where("id", req.params.id)
      .update('status' , req.body.status )
      .then((data) => {
        console.log(data);
        console.log("Anuncio inativado");
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({
          message: "Erro! Não foi possível realizar delete do usuário!",
        });
      });
  };

  module.exports = {InativarAnuncioController}