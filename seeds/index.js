const sequelize = require('../config/connection');
const seedMovies = require('./movieData');
const seedRating = require('./ratingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMovies();

  await seedRating();

  process.exit(0);
};

seedAll();