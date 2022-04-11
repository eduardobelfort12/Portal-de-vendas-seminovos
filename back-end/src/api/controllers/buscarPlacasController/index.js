const knex = require('../../models/databaseConnect')



const BuscarPlacasController =  async (req, res) => {

    await knex.select('*').from('cadastro_veiculos')
    .then((data) => {
        console.log(data)
        return res.status(201).json(data)
    }).catch((err) => {

        console.log(err)
        return res.status(401).json({message: "Erro! não foi possivel realizar query"})
    })


}



module.exports = {BuscarPlacasController}