const sequelize = require('../config/connection');
const { User, Movie } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Movie.bulkCreate(movieData);

  process.exit(0);
};

seedDatabase();
