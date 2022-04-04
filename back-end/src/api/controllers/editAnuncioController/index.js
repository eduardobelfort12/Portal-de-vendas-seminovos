const  knex = require('../../models/databaseConnect')

const editAnuncioController = async (req, res) => {
    await knex("cadastro_veiculos")
      .where({ id: req.params.id })
      .update({
        marca: req.body.marca,
        modelo: req.body.modelo,
        preco: req.body.preco,
      })
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
  module.exports = {editAnuncioController}