const assert = require('assert');
const app = require('../../src/app');

describe('\'cidades\' service', () => {
  it('registered the service', () => {
    const service = app.service('cidades');

    assert.ok(service, 'Registered the service');
  });
});
