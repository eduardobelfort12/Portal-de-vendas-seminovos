const knex= require('../../models/databaseConnect')

const formularioContatoController = async (req, res) => {
    console.log(req.body);
    if (req.body) {
      await knex("contato")
        .insert({
          nome: req.body.nome,
          email: req.body.email,
          telefone: req.body.telefone,
          assunto: req.body.assunto,
          mensagem: req.body.mensagem,
        })
        .then((data) => {
          console.log(data);
          return res.status(201).json(data);
        })
        .catch((err) => {
          console.log(err);
          return res.status(401).json({ message: "Erro ao enviar mensagem!" });
        });
    }
  };
  module.exports = {formularioContatoController}