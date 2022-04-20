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
  ListEditController 

} = require('../controllers/listarEditAnuncioController/')
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

routes.post("/upload", uploadUser.array("img", 2), ImageInsertController);
routes.get("/listagem/:id", ImgController);
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
routes.patch("/listedit/:id", ListEditController)

// try {

//  const  image =  fs.readFileSync("./src/public/upload/" , {encoding: 'base64'} )
//   console.log(image)
// } catch (error) {
//   console.log(error)
// }

module.exports = routes;
