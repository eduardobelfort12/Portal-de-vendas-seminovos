const routes = require('express').Router()

routes.get('/teste', async(req, res) => {
    res.send('<h4>Funcionando!</h4>')
})


module.exports = routes