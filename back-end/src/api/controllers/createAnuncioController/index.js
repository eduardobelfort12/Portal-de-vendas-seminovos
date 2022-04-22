const knex =  require('../../models/databaseConnect')


const cadastroVeiculosController = async (req, res) => {
    if (req.file && req.body) {
      await knex("cadastro_veiculos")
        .insert({
          image: req.file.filename.toString("base64"),
          
          PROPRIETARIO: req.body.PROPRIETARIO,
          placa: req.body.placa,
          ANO: req.body.ANO,
          marca: req.body.marca,
          MODELO: req.body.MODELO,
          telefone: req.body.telefone,
          preco: req.body.preco,
          potencia: req.body.potencia,
          torque: req.body.torque,
          km: req.body.km,
          COR: req.body.COR,
          cabine: req.body.cabine,
          tiposuspensao: req.body.tiposuspensao,
          relacaodiferencial: req.body.relacaodiferencial,
          entreeixo: req.body.entreeixo,
          capacidadecombustivel: req.body.capacidadecombustivel,
          multimidia: req.body.multimidia,
          ar_condicionado: req.body.ar_condicionado,
          direcao_hidraulica: req.body.direcao_hidraulica,
          controle_tracao: req.body.controle_tracao,
          informacoes: req.body.informacoes,
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