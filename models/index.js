
const Rating = require('./Rating');
const Movie = require('./Movie');

Rating.hasMany(Movie, {
  foreignKey: 'rating_id',
  onDelete: 'CASCADE'
});

Rating.belongsTo(Movie, {
  foreignKey: 'rating_id'
});

module.exports = { Rating, Movie };