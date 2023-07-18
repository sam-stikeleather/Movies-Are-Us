const sequelize = require('../config/connection');
const { Movie, Rating } = require('../models');
const movieData = require('./movieData.json');
const ratingData = require('./ratingData.json');

const seedDatabase = async () => {
  try {
    // Sync the models with the database
    await sequelize.sync({ force: true });

    // Seed the Rating table
    await Rating.bulkCreate(ratingData);

    // Seed the Movie table with ratings
    for (const movie of movieData) {
      const { rating: ratingName, ...movieDetails } = movie;

      // Find the rating entry by name
      const ratingInstance = await Rating.findOne({ where: { rating: ratingName } });

      // Create the movie entry and associate it with the corresponding rating
      await Movie.create({
        ...movieDetails,
        rating: ratingInstance ? ratingInstance.id : null, // Set rating to null if ratingInstance is not found
      });
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
