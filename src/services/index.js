const cidades = require('./cidades/cidades.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cidades);
};
