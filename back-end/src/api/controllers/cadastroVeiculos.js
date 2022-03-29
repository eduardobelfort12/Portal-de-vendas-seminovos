const knex = require("../models/databaseConnect");
const oracle = require("../models/oracleDBConnect.js/oracleConnect");
//controller para criação de registro para cadastro de veiculos no portal de vendas
const cadastroVeiculosController = async (req, res) => {
  if (req.file && req.body) {
    await knex("cadastro_veiculos")
      .insert({
        image: req.file.filename.toString("base64"),
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

const buscarDadosController = async (req, res) => {
  if (req.body) {
    await knex
      .select("*")
      .from("cadastro_veiculos")
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Veiculo não encontrado!" });
      });
  }
};

const exibirDadosController = async (req, res) => {
  await knex
    .select("marca", "modelo", "opcionais")
    .from("cadastro_veiculos")
    .distinctOn("marca")
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

const filtrarDadosController = async (req, res) => {
  console.log(req.params.marca);
  await knex
    .select(
      "marca",
      "cor",
      "modelo",
      "image",
      "preco",
      "informacoesadicionais",
      "opcionais"
    )
    .from("cadastro_veiculos")
    .where("marca", req.params.marca)
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Veiculo não encontrado!" });
    });
};

const DeletarDadosController = async (req, res) => {
  await knex("cadastro_veiculos")
    .where("id")
    .del("*")
    .then((data) => {
      console.log(data);
      return res
        .status(201)
        .json({ message: "Veículo Deletado com sucesso da base de dados!" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "Erro! Não foi possível deletar os dados do usuário!",
      });
    });
};
const UpdateDadosController = async (req, res) => {
  if (req.params) {
    await knex("cadastro_veiculos")
      .select("modelo")
      .where("id", req.params.id)
      .update("modelo")
      .then((data) => {
        console.log(data);
        return res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Falha ao realizar atualização de dados!" });
      });
  }
};
const opcionaisDadosController = async (req, res) => {
  if (req.body) {
    await knex("opcionais")
      .insert({
        direcao_hidraulica: req.body.direcao_hidraulica,
        ar_condicionado: req.body.ar_condicionado,
        check_control: req.body.check_control,
        computador_de_bordo: req.body.computador_de_bordo,
      })
      .then((data) => {
        console.log(data);
        return res
          .status(201)
          .json({ message: "Opcionais cadastrados com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Não foi possível inserir opcionais " });
      });
  }
};
const marcaDadosController = async (req, res) => {
  if (req.body) {
    await knex("marcas")
      .insert({
        volvo: req.body.volvo,
        scania: req.body.scania,
        volkswagen: req.body.volkswagen,
        mercedes_benz: req.body.mercedes_benz,
      })
      .then((data) => {
        console.log(data);
        return res
          .status(201)
          .json({ message: "Marcas cadastradas com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        return res
          .status(401)
          .json({ message: "Erro! Não foi possível inserir marcas!" });
      });
  }
};
const buscarOpcionaisController = async (req, res) => {
  await knex
    .select(
      "direcao_hidraulica",
      "ar_condicionado",
      "check_control",
      "computador_de_bordo"
    )
    .from("opcionais")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! Dados não encontrados!" });
    });
};
const buscarMarcasController = async (req, res) => {
  await knex
    .select("*")
    .from("marcas")
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({ message: "Erro! dados não encontrados!" });
    });
};
const queryOracleDb = async (req, res) => {
  await oracle
    .with(
      "ETL_VW_DADOS_VEIC_MOT",
      oracle.raw(`SELECT 
  CG.CG_NOME AS PROPRIETARIO,
  VEI.VEI_PLACA AS PLACA,
  VEI.VEI_ANO AS ANO,
  VEI.VEI_COR AS COR,
  VEI.VEI_CHASSIS AS CHASSI,
  VEI.VEI_MODELO AS MODELO,
  VEI.VEI_CERT_PROP AS NUM_DOC,
  VEI.VEI_RENAVAM AS RENAVAM,
  NVL(VEI.VEI_OBS,' ') AS OBS
  FROM VEICULO VEI 
  INNER JOIN CADASTRO_GERAL CG ON CG.CG_COD = VEI.CG_PROP AND CG.LOC_COD = VEI.LOC_PROP
  WHERE VEI.VEI_CATEGORIA = 'F' AND VEI.SV_COD = '160'
  ORDER BY VEI_DT_ATU DESC`)
    )
    .select("*")
    .from("ETL_VW_DADOS_VEIC_MOT")
    .then((data) => {
      console.log(data);
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "Erro! Não foi possível executar esta query!" });
    });
};
//Query database formulário de contato

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
const buscarMensagensController = async (req, res) => {
  await knex
    .select("*")
    .from("contato")
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(401)
        .json({ message: "Erro! mensagens nao encontradas!" });
    });
};
//Deleta mensagens Lidas
const deletarMensagensController = async (req, res) => {
  await knex("contato")
    .where("id", req.params.id)
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
const deletarAnuncioController = async (req, res) => {
  console.log(req.params.id);
  await knex("cadastro_veiculos")
    .where("id", req.params.id)
    .del()
    .then((data) => {
      console.log(data);
      console.log("Anúncio excluído com sucesso!");
      return res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(401).json({
        message: "Erro! Não foi possível realizar delete do usuário!",
      });
    });
};

module.exports = {
  cadastroVeiculosController,
  buscarDadosController,
  DeletarDadosController,
  UpdateDadosController,
  queryOracleDb,
  filtrarDadosController,
  exibirDadosController,
  opcionaisDadosController,
  marcaDadosController,
  buscarOpcionaisController,
  buscarMarcasController,
  buscarMensagensController,
  formularioContatoController,
  deletarMensagensController,
  deletarAnuncioController,
};
