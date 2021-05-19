const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = { User };
