const knex = require('../models/databaseConnect')

//controller para criação de registro para cadastro de veiculos no portal de vendas 
const cadastroVeiculosController = async (req, res) => {
    const {image} = req.file
   const {telefone,preco,potencia,torque,km,cor,cabine,
    tiposuspensao,relacaodiferencial,entreeixo,
    capacidadecombustivel,opcionais,informacoesadicionais} = req.body
   await knex('cadastro_veiculos').insert({
      
       preco,
        telefone,potencia,torque,km,cor,cabine,
        tiposuspensao,relacaodiferencial,entreeixo,
        capacidadecombustivel,opcionais,informacoesadicionais,image
    }).then((response)=> {
        console.log(response)
        res.status(201).json(response)
    }).catch((err) => {
        console.log(err)
        res.status(400).json({message: "Erro ao inserir dados "})
    })

}

module.exports = {cadastroVeiculosController}