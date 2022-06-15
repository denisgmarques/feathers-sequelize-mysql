// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cidades = sequelizeClient.define('cidades', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:    true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    uf: {
      type: DataTypes.ENUM({
        values: [
          'AC',
          'AL',
          'AM',
          'AP',
          'BA',
          'CE',
          'DF',
          'ES',
          'GO',
          'MA',
          'MG',
          'MS',
          'MT',
          'PA',
          'PB',
          'PE',
          'PI',
          'PR',
          'RJ',
          'RN',
          'RO',
          'RR',
          'RS',
          'SC',
          'SE',
          'SP',
          'TO'
        ]
      }),
      allowNull: false
    }
  }, {
    underscored: true,
    indexes: [
      {
        unique: false,
        fields: ['nome']
      },
      {
        unique: false,
        fields: ['uf']
      }
    ]
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  cidades.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cidades;
};
