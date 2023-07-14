
const Rating = require('./rating');
const Movie = require('./movie');

Rating.hasMany(Movie, {
  foreignKey: 'rating',
  onDelete: 'CASCADE'
});

Rating.belongsTo(Movie, {
  foreignKey: 'rating'
});

module.exports = { Rating, Movie };