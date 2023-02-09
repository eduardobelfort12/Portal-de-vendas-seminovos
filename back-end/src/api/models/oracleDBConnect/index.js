const oracle = require('knex')({
    client: '',
    connection: {
        user: "",
        password: "",
        connectString :""
    }
  });

 module.exports = oracle
