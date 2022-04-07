const routes = require("express").Router();

const {selectQueryOracleController} = require('../controllers/selectQueryOracleController/')
const {cadastroVeiculosController} = require('../controllers/createAnuncioController/')
const {buscarDadosController} = require('../controllers/listarTodosController/')
const {editAnuncioController} = require('../controllers/editAnuncioController/')
const {formularioContatoController} = require('../controllers/formContatoController/')
const {buscarMensagensController} = require("../controllers/buscarMensagensController/")
const {deleteMensagemController} = require("../controllers/deleteMensagensController/")
const {deleteAnuncioController} = require('../controllers/deleteAnuncioController')
const {filtroInputController} = require('../controllers/filtroInputController/')

const uploadUser = require("../middlewares/uploadimages");
const { filtrarDadosController } = require("../controllers/filtrarDadosController");
const {whereQueryOracleController} = require('../controllers/selectQueryOracleController/')
const {testeWhereController} =  require('../controllers/selectMyController/');



routes.post(
  "/registrar",
  uploadUser.single("image"),
  cadastroVeiculosController
);
routes.get("/filtrar/:marca/:modelo", filtrarDadosController)
routes.get("/buscar", buscarDadosController);
routes.patch("/atualizar/:id", editAnuncioController);
routes.get("/query", selectQueryOracleController);
routes.post("/send", formularioContatoController);
routes.get("/mensagens", buscarMensagensController);
routes.delete("/deletarmsg/:id", deleteMensagemController);
routes.delete("/deletaranuncio/:id", deleteAnuncioController);
routes.get("/exibir", filtroInputController);
routes.get('/autocompletar/:PLACA', whereQueryOracleController)
routes.get('/queryteste/:placa' , testeWhereController)



module.exports = routes;
