const routes = require('express').Router()
const {cadastroVeiculosController, buscarImageController} = require('../controllers/cadastroVeiculos')
const uploadUser = require("../middlewares/uploadimages");

routes.get('/teste', async(req, res) => {
    res.send('<h4>Funcionando!</h4>')
    console.log('funcionando')
})


routes.post('/registrar' ,uploadUser.single('image') , cadastroVeiculosController)
routes.get('/buscar', buscarImageController )

module.exports = routes