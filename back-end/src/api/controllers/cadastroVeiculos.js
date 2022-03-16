const knex = require("../models/databaseConnect");
//controller para criação de registro para cadastro de veiculos no portal de vendas
const cadastroVeiculosController = async (req, res) => {
  if (req.file && req.body) {
    await knex("cadastro_veiculos")
      .insert({
        image: req.file.filename.toString('base64'),
        marca:req.body.marca,
        modelo:req.body.modelo,
        telefone: req.body.telefone,
        preco: req.body.preco,
        potencia: req.body.potencia,
        torque: req.body.torque,
        km: req.body.km,
        cor: req.body.cor,
        cabine: req.body.cabine,
        tiposuspensao: req.body.tiposuspensao,
        relacaodiferencial: req.body.relacaodiferencial,
        entreeixo: req.body.entreeixo,
        capacidadecombustivel: req.body.capacidadecombustivel,
        opcionais: req.body.opcionais,
        informacoesadicionais: req.body.informacoesadicionais,
      })
      .then((data) => {
        console.log(data);
        console.log("Veículo registrado com sucesso!");
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro ao realizar upload de imagem!" });
      });
  }
};

const buscarDadosController = async (req, res) => {
  if(req.body) {
  await knex.select('*')
  .from('cadastro_veiculos')
  .then(data => {
    console.log(data)
    return res.status(201).json(data)
  }).catch(err => {
    console.log(err)
    return res.status(401).json({message: "Erro! Veiculo não encontrado!"})
  })
}
};
module.exports = { cadastroVeiculosController, buscarDadosController };
