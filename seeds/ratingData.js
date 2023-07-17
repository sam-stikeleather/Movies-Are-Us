const { Rating } = require('../models');

const ratingData = [
    {
        rating: 'Rated G',
    },
    {
        rating: 'Rated PG',
    },
    {
        rating: 'Rated PG-13',
    },
    {
        rating: 'Rated R',
    },
]

async function seedRatings() {
    try {
      await Movie.bulkCreate(ratingData);
      console.log('Ratings seeded successfully!');
    } catch (error) {
      console.error('Error seeding ratings:', error);
    } finally {
      process.exit();
    }
  }
  
  seedRatings();