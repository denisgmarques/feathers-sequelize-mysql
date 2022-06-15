// Initializes the `cidades` service on path `/cidades`
const { Cidades } = require('./cidades.class');
const createModel = require('../../models/cidades.model');
const hooks = require('./cidades.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cidades', new Cidades(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cidades');

  service.hooks(hooks);
};
