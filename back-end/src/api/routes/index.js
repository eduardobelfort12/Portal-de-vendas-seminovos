const routes = require("express").Router();
const {
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
  formularioContatoController,
  buscarMensagensController,
  deletarMensagensController,
  deletarAnuncioController,
} = require("../controllers/cadastroVeiculos");
const uploadUser = require("../middlewares/uploadimages");

routes.get("/teste", async (req, res) => {
  res.send("<h4>Funcionando!</h4>");
  console.log("funcionando");
});

routes.post(
  "/registrar",
  uploadUser.single("image"),
  cadastroVeiculosController
);
routes.get("/buscar", buscarDadosController);
routes.delete("/deletar", DeletarDadosController);
routes.patch("/atualizar/:id/:modelo", UpdateDadosController);
routes.get("/query", queryOracleDb);
routes.get("/filtrar/:marca/:modelo", filtrarDadosController);
routes.get("/exibir", exibirDadosController);
routes.post("/opcionais", opcionaisDadosController)
routes.post("/marcas" , marcaDadosController)
routes.get("/options", buscarOpcionaisController)
routes.get("/options", buscarOpcionaisController)
routes.get("/getmarcas", buscarMarcasController)
routes.post("/send" , formularioContatoController)
routes.get("/mensagens" ,buscarMensagensController)
routes.delete("/deletarmsg/:id" , deletarMensagensController)
routes.delete("/deletaranuncio/:id" , deletarAnuncioController)

module.exports = routes;
