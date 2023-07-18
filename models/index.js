const Rating = require('./Rating');
const Movie = require('./movie');

Movie.belongsTo(Rating, {
  foreignKey: 'rating_id', 
});

Rating.hasMany(Movie, {
  foreignKey: 'rating_id',
  onDelete: 'CASCADE',
});
