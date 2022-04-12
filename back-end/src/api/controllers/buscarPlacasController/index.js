const knex = require('../../models/databaseConnect')



const BuscarPlacasController =  async (req, res) => {
if(req.params){
    await knex.select('*').from('cadastro_veiculos').where('placa',  req.params.placa)
    .then((data) => {
        console.log(data)
        return res.status(201).json(data)
    }).catch((err) => {

        console.log(err)
        return res.status(401).json({message: "Erro! não foi possivel realizar query"})
    })
}

}



module.exports = {BuscarPlacasController}