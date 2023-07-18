const router = require('express').Router();
const { Movie } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all movies for home page
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    console.log('Movies', movies);
    res.render('movies', { movies });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET one movie
// Use the custom middleware before allowing the user to access the gallery
router.get('/movie/:id', async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id);

    if (!dbMovieData) {
      res.status(404).json({ message: 'No movie found with this id' });
      return;
    }

    const movie = dbMovieData.get({ plain: true });
    res.render('movies', { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

router.get('/test', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
