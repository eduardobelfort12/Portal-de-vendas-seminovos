const express = require("express");
const routes = require('./api/routes')
const path = require('path')
const cors = require("cors");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.cors();
    this.routes()
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static(path.join (__dirname,'/public')))
    this.server.use(express.urlencoded({ extended: true }));
  }
  cors() {
    this.server.use(cors());

  }
  routes() {
      this.server.use(routes)
  }

}
module.exports = new App().server;