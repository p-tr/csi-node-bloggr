const { Post } = require('./model/Post');
const { User } = require('./model/User');
const { sequelize } = require('./sequelize');

module.exports = { Post, User, sequelize };
