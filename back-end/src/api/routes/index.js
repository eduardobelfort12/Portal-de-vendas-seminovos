const routes = require('express').Router()
const {cadastroVeiculosController} = require('../controllers/cadastroVeiculos')

routes.get('/teste', async(req, res) => {
    res.send('<h4>Funcionando!</h4>')
    console.log('funcionando')
})


routes.post('/registrar' , cadastroVeiculosController)


module.exports = routes