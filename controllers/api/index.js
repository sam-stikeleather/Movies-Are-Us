const router = require('express').Router();
const userRoutes = require('./user-routes');
const {Movie} = require('../../models')

router.use('/users', userRoutes);

router.get('/movies', async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.json(movies);
    } catch (err) {
      console.error('Error fetching movies:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;