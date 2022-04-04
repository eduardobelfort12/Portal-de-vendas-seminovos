const knex =  require('../../models/databaseConnect')

const buscarMensagensController = async (req, res) => {
    await knex
      .select("*")
      .from("contato")
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! mensagens nao encontradas!" });
      });
  };

  module.exports = {buscarMensagensController}