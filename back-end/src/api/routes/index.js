const routes = require('express').Router()
const {cadastroVeiculosController, buscarDadosController, DeletarDadosController, UpdateDadosController} = require('../controllers/cadastroVeiculos')
const uploadUser = require("../middlewares/uploadimages");

routes.get('/teste', async(req, res) => {
    res.send('<h4>Funcionando!</h4>')
    console.log('funcionando')
})


routes.post('/registrar' ,uploadUser.array('image[]' , 10) , cadastroVeiculosController)
routes.get('/buscar', buscarDadosController )
routes.delete('/deletar' , DeletarDadosController) 
routes.patch('/atualizar' , UpdateDadosController)

module.exports = routes