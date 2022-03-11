const knex = require("../models/databaseConnect");
//controller para criação de registro para cadastro de veiculos no portal de vendas
const cadastroVeiculosController = async (req, res) => {

  if (req.file) {
    await knex("cadastro_veiculos")
      .insert({ image : req.file.originalname})
      .then((data) => {
        console.log(data);
        console.log('Imagem inserida com sucesso!')
        return res.status(201).json({message: "Imagem inserida com sucesso!"})
      })
      .catch((err) => {
        console.log(err);
        return res.status(401).json({message: "Erro ao realizar upload de imagem!" } )
      });
  }
};

module.exports = { cadastroVeiculosController };
