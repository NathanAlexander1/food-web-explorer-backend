const User = require('./User');
// const Region = require('./Region');
// const Organism = require('./Organism');
const Interest = require('./Interest');

// User.hasMany(Region);
// Region.belongsTo(User);

// User.hasMany(Organism);
// Organism.belongsTo(User);

User.hasMany(Interest);
Interest.belongsTo(User);

module.exports = {
    User, Interest
  };