const router = require('express').Router();
const { Movie } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await Movie.create(req.body);

    
      res.status(200).json(userData);
   
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (err) {
      console.error('Error fetching movies:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;