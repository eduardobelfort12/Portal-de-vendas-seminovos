const knex = require("../models/databaseConnect");
//controller para criação de registro para cadastro de veiculos no portal de vendas
const cadastroVeiculosController = async (req, res) => {
  if (req.file) {
    await knex("cadastro_veiculos")
      .insert({ image: req.file.filename })
      .then((data) => {
        console.log(data);
        console.log("Imagem inserida com sucesso!");
        return res
          .status(201)
          .json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro ao realizar upload de imagem!" });
      });
  }
};

const buscarImageController = async (req, res) => {
    const {id} = req.body
  await knex.select().table('cadastro_veiculos').where({id})
    .then((data) => {
      console.log(data);
      return res
        .status(201)
        .json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { cadastroVeiculosController, buscarImageController };
