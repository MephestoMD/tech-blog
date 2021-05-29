const User = require('./User');
const Post = require('./Post')

User.hasMany(Post, {foreignKey: 'username'});

module.exports = {
    User,
    Post
  };
