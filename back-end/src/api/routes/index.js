const routes = require("express").Router();
const {
  cadastroVeiculosController,
  buscarDadosController,
  DeletarDadosController,
  UpdateDadosController,
  queryOracleDb,
  filtrarDadosController,
  exibirDadosController
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
routes.patch("/atualizar", UpdateDadosController);
routes.get("/query", queryOracleDb);
routes.get("/filtrar/:marca/:modelo", filtrarDadosController);
routes.get("/exibir", exibirDadosController);

module.exports = routes;
