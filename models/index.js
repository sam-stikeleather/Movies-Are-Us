const Rating = require('./Rating');
const Movie = require('./movie');

Movie.belongsTo(Rating, {
  foreignKey: 'rating_id',
  as: 'movie_rating'
});

Rating.hasMany(Movie, {
  foreignKey: 'rating_id',
  onDelete: 'CASCADE',
});

module.exports = { Rating, Movie };
