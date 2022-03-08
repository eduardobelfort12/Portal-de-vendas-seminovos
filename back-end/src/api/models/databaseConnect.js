const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      port : 5000,
      user : 'postgres',
      password : '1234',
      database : 'portal_de_vendas'
    }
  });

 module.export = knex
