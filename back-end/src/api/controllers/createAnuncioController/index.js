const knex =  require('../../models/databaseConnect')


const cadastroVeiculosController = async (req, res) => {
    if (req.file && req.body) {
      await knex("cadastro_veiculos")
        .insert({
          image: req.file.filename.toString("base64"),
          proprietario: req.body.proprietario,
          placa: req.body.placa,
          ano_veiculo: req.body.ano_veiculo,
          marca: req.body.marca,
          modelo: req.body.modelo,
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

  module.exports = {cadastroVeiculosController}