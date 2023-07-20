const router = require('express').Router();
const { Movie } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all movies for home page
router.get('/', async (req, res) => {
  try {
    const dbMoviesData = await Movie.findAll();

    const movies = dbMoviesData.map((movie) => movie.get({ plain: true }));
    
    console.log(movies)

    res.render('homepage', { movies, loggedIn: req.session.logged_in  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const dbMoviesData = await Movie.findAll();

    const movies = dbMoviesData.map((movie) => movie.get({ plain: true }));
    
    console.log(movies)

    res.render('profile', { movies, loggedIn: req.session.logged_in  });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/movie-partial/:id', async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id)

    if (!dbMovieData) {
      res.status(404).json({ message: 'No movie found with this id' });
      return;
    }

    const movie = dbMovieData.get({ plain: true });
    res.render('partials/movie-partial', { movie, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
    res.render('movies', { movie, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/test', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/has_seen', async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: req.body.movieId },
      { has_seen: req.body.has_seen },
      { new: true }
    );

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/add', (req, res) => {
  if (req.session.logged_in) {
  res.render('partials/add',{loggedIn: req.session.logged_in });
}});

module.exports = router;
