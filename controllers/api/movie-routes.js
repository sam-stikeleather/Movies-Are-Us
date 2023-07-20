const router = require('express').Router();
const { Movie } = require('../../models');

router.post('/', async (req, res) => {
  try { 
    const addData = await Movie.create({
    title: req.body.title,
    release_date: req.body.release_date,
    genre: req.body.genre,
    rating: req.body.rating,
    has_seen: req.body.has_seen,
  });
  // if the movie is successfully created, the new response will be returned as json
  res.status(200).json(addData)
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