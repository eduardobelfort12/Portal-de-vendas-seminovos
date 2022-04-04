const knex = require('../../models/databaseConnect')

const deleteAnuncioController = async (req, res) => {
    console.log(req.params.id);
    await knex("cadastro_veiculos")
      .where("id", req.params.id)
      .del()
      .then((data) => {
        console.log(data);
        console.log("Anúncio excluído com sucesso!");
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({
          message: "Erro! Não foi possível realizar delete do usuário!",
        });
      });
  };

  module.exports = {deleteAnuncioController}