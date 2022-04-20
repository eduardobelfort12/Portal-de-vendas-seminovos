const  knex = require('../../models/databaseConnect')

const ListEditController = async (req, res) => {
    await knex.select('*')
    .from("cadastro_veiculos").where({id : req.params.id})
      .then((data) => {
        console.log("deu certo");
        console.log(data);
        return res.status(201).json({ message: "deu certo" });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Falha ao realizar atualização de dados!" });
      });
  };
  module.exports = {ListEditController}