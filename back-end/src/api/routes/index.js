const routes = require("express").Router();
const knex = require("../models/databaseConnect")
const fs  = require('fs')


const {
  selectQueryOracleController,
} = require("../controllers/selectQueryOracleController/");
const {
  cadastroVeiculosController,
} = require("../controllers/createAnuncioController/");
const {
  buscarDadosController,
} = require("../controllers/listarTodosController/");
const {
  editAnuncioController,
} = require("../controllers/editAnuncioController/");
const {
  formularioContatoController,
} = require("../controllers/formContatoController/");
const {
  buscarMensagensController,
} = require("../controllers/buscarMensagensController/");
const {
  deleteMensagemController,
} = require("../controllers/deleteMensagensController/");

const {
  filtroInputController,
} = require("../controllers/filtroInputController/");
const {
  filtrarDadosController,
} = require("../controllers/filtrarDadosController");
const {
  whereQueryOracleController,
} = require("../controllers/selectQueryOracleController/");
const { testeWhereController } = require("../controllers/selectMyController/");
const {
  ExibirDetalhesAnuncioController,
} = require("../controllers/exibirDetalhesAnuncioController/");
const {
  InativarAnuncioController,
} = require("../controllers/inativarAnuncioController");
const {
  BuscarPlacasController,
} = require("../controllers/buscarPlacasController/");
const {
  ListarAnunciosInativosController,
} = require("../controllers/buscarAnunciosInativosController");
const uploadUser = require("../middlewares/uploadimages");
const { ImgController } = require("../controllers/imageTableControoler");
const { ImageInsertController } = require("../controllers/imageController");


routes.post(
  "/registrar",
  uploadUser.single("image"),
  cadastroVeiculosController
);

routes.post("/upload", uploadUser.single('image') ,ImageInsertController)
routes.get("/listagem", ImgController);
routes.get("/filtrar/:marca/:modelo", filtrarDadosController);
routes.get("/buscar", buscarDadosController);
routes.patch("/atualizar/:id", editAnuncioController);
routes.get("/query", selectQueryOracleController);
routes.post("/send", formularioContatoController);
routes.get("/mensagens", buscarMensagensController);
routes.delete("/deletarmsg/:id", deleteMensagemController);
routes.get("/exibir", filtroInputController);
routes.get("/autocompletar/:PLACA", whereQueryOracleController);
routes.get("/queryteste/:placa", testeWhereController);
routes.get("/detalhe/:id", ExibirDetalhesAnuncioController);
routes.get("/buscarplaca/:placa", BuscarPlacasController);
routes.patch("/inativar/:id", InativarAnuncioController);
routes.get("/inativos", ListarAnunciosInativosController);
routes.post("/base64", uploadUser.single('image'),async (req, res) => {
  const image = req.file.filename
  await knex('images').insert({image : new Buffer.from(image, 'base64')})
  .then((data) => {
    console.log(data)
    return res.json(data)

  }).catch((err) => {

    console.log(err)
    return res.json({message: "Erro! "})
  })

  // let base64Val = Buffer.from(image).toString('base64')
  // let decodedVal = Buffer.from(base64Val, 'base64').toString('base64');

  // console.log(decodedVal)
  // return res.json(decodedVal)

})

module.exports = routes;
