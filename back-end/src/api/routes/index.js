const routes = require("express").Router();

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
  formularioContatoController,
} = require("../controllers/formContatoController/");
const {
  buscarMensagensController,
} = require("../controllers/buscarMensagensController/");
const {
  deleteMensagemController,
} = require("../controllers/deleteMensagensController/");

const {
  FiltroInputModeloController,
} = require("../controllers/filtroInputController/");
const {
  FiltroInputMarcaController,
} = require("../controllers/filtroInputController/");
const {
  filtrarDadosController,
} = require("../controllers/filtrarDadosController");
const {
  whereQueryOracleController,
} = require("../controllers/selectQueryOracleController/");
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
  EditAnuncioController,
} = require("../controllers/editAnuncioController/");
const {
  ListarAnunciosInativosController,
} = require("../controllers/buscarAnunciosInativosController");
const uploadUser = require("../middlewares/uploadimages");
const { ImgController } = require("../controllers/imageTableControoler");
const { ImageInsertController } = require("../controllers/imageController");
const {
  ListEditController,
} = require("../controllers/listarEditAnuncioController/");
const {
  FiltragemController,
} = require("../controllers/resultadoFiltragemControlller");
routes.post(
  "/registrar",
  uploadUser.single("image"),
  cadastroVeiculosController
);

routes.post("/upload", uploadUser.array(`foto`, 3), ImageInsertController);
routes.get("/listagem/:img_id", ImgController);
routes.get("/filtrar/:marca", filtrarDadosController);
routes.get("/buscar", buscarDadosController);
routes.get("/query", selectQueryOracleController);
routes.post("/send", formularioContatoController);
routes.get("/mensagens", buscarMensagensController);
routes.delete("/deletarmsg/:id", deleteMensagemController);
routes.get("/exibirmodelo", FiltroInputModeloController);
routes.get("/exibirmarca", FiltroInputMarcaController);
routes.get("/autocompletar/:PLACA", whereQueryOracleController);
routes.get("/detalhe/:id", ExibirDetalhesAnuncioController);
routes.get("/buscarplaca/:placa", BuscarPlacasController);
routes.patch("/inativar/:id", InativarAnuncioController);
routes.get("/inativos", ListarAnunciosInativosController);
routes.patch("/editar/:id", EditAnuncioController);
routes.get("/listedit", ListEditController);
routes.get("/filtrados/:marca/:MODELO", FiltragemController);

// try {

//  const  image =  fs.readFileSync("./src/public/upload/" , {encoding: 'base64'} )
//   console.log(image)
// } catch (error) {
//   console.log(error)
// }

module.exports = routes;
