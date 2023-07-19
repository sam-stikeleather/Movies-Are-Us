// const sequelize = require('../config/connection');
// const { Movie } = require('../models');

// const movieData = require('./movieData.json');

// const seedDatabase = async () => {
//   try {
//     await sequelize.sync({ force: true });

//     await Movie.bulkCreate(movieData);

//     console.log('Database seeded successfully!');
//     process.exit(0);
//   } catch (err) {
//     console.log('Error seeding database:', err);
//     process.exit(1);
//   }
// };

// seedDatabase();

const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
