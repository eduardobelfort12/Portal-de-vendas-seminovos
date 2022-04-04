const knex = require ('../../models/databaseConnect')

const deleteMensagemController = async (req, res) => {
    await knex("contato")
      .where({ id: req.params.id })
      .del()
      .then((data) => {
        console.log(data);
        console.log("Mensagem deletada com sucesso!");
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({
          message: "Erro! Não foi possível realizar delete do usuário!",
        });
      });
  };

  module.exports = {deleteMensagemController}
