const oracle = require('knex')({
    client: 'oracledb',
    connection: {
        user: "USU_LEITURA",
        password: "US369LEI",
        connectString :"scantoradb.tora.local/sitprd"
    }
  });

 module.exports = oracle
