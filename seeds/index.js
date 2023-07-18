const sequelize = require('../config/connection');
const seedMovies = require('./movieData');
const seedRating = require('./ratingData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully.');

    await seedRating();
    await seedMovies();

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedAll();
