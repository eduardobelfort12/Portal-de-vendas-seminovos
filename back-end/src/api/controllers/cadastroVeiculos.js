const knex = require('../models/databaseConnect')

//controller para criação de registro para cadastro de veiculos no portal de vendas 
const cadastroVeiculosController = async (req, res) => {
    const {telefone,preco,potencia,torque,km,cor,cabine,
        tiposuspensao,relacaodiferencial,entreeixo,
        capacidadecombustivel,opcionais,informacoesadicionais} = req.body
   await knex('cadastro_veiculos').insert({
        telefone,preco,potencia,torque,km,cor,cabine,
        tiposuspensao,relacaodiferencial,entreeixo,
        capacidadecombustivel,opcionais,informacoesadicionais
    }).then((data)=> {
        console.log(data)
        res.status(201).json(req.body)
    }).catch((err) => {
        console.log(err)
        res.status(400).json({message: "Erro ao inserir dados "})
    })

}

module.exports = {cadastroVeiculosController}