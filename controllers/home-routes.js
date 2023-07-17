const router = require('express').Router();
const { Movie, Rating } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all movies for home page
router.get('/', async (req, res) => {
  try {
    const dbMovieData = await Movie.findAll({
      include: [
        {
          model: Rating,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const movies = dbMovieData.map((movie) =>
      movie.get({ plain: true })
    );

    res.render('homepage', {
      movies,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one movie
// Use the custom middleware before allowing the user to access the gallery
router.get('/movie/:id', withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Rating,
          attributes: [
            'id',
            'rating',
            'isSeventeen',
          ],
        },
      ],
    });

    const movie = dbMovieData.get({ plain: true });
    res.render('gallery', { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one rating
// Use the custom middleware before allowing the user to access the painting
router.get('/rating/:id', withAuth, async (req, res) => {
  try {
    const dbRatingData = await Rating.findByPk(req.params.id);

    const rating = dbRatingData.get({ plain: true });

    res.render('rating', { rating, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;