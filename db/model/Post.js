const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../sequelize');

class Post extends Model {}

Post.init({
  // propriétés des objets Post
}, {
  sequelize,
  modelName: 'Post',
});

module.exports = { Post };
