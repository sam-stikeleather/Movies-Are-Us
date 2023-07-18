const sequelize = require('../config/connection');
const { Movie } = require('../models');

const movieData = require('./movieData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Movie.bulkCreate(movieData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.log('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
