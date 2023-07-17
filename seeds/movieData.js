const { Movie } = require('../models');

const moviedata = [
  {
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    genre: 'Drama',
    rating: 3,
  },
  {
    title: 'The Godfather',
    release_date: '1972-03-24',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'Pulp Fiction',
    release_date: '1994-10-14',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'The Dark Knight',
    release_date: '2008-07-18',
    genre: 'Action',
    rating: 3,
  },
  {
    title: 'Fight Club',
    release_date: '1999-10-15',
    genre: 'Drama',
    rating: 3,
  },
  {
    title: 'Inception',
    release_date: '2010-07-16',
    genre: 'Action',
    rating: 3,
  },
  {
    title: 'Goodfellas',
    release_date: '1990-09-19',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'Forrest Gump',
    release_date: '1994-07-06',
    genre: 'Drama',
    rating: 2,
  },
  {
    title: 'The Matrix',
    release_date: '1999-03-31',
    genre: 'Action',
    rating: 2,
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    release_date: '2001-12-19',
    genre: 'Adventure',
    rating: 2,
  },
  {
    title: 'The Silence of the Lambs',
    release_date: '1991-02-14',
    genre: 'Thriller',
    rating: 3,
  },
  {
    title: 'Schindlers List',
    release_date: '1993-12-15',
    genre: 'Biography',
    rating: 3,
  },
  {
    title: 'The Departed',
    release_date: '2006-10-06',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'Seven',
    release_date: '1995-09-22',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'The Usual Suspects',
    release_date: '1995-08-16',
    genre: 'Crime',
    rating: 3,
  },
  {
    title: 'Gladiator',
    release_date: '2000-05-05',
    genre: 'Action',
    rating: 3,
  },
  {
    title: 'The Lion King',
    release_date: '1994-06-15',
    genre: 'Animation',
    rating: 0,
  },
  {
    title: 'Saving Private Ryan',
    release_date: '1998-07-24',
    genre: 'Drama',
    rating: 3,
  },
  {
    title: 'The Green Mile',
    release_date: '1999-12-10',
    genre: 'Drama',
    rating: 3,
  },
  {
    title: 'The Prestige',
    release_date: '2006-10-20',
    genre: 'Mystery',
    rating: 2,
  },
  {
    title: 'Interstellar',
    release_date: '2014-11-07',
    genre: 'Sci-Fi',
    rating: 2,
  },
];

async function seedMovies() {
  try {
    await Movie.bulkCreate(moviedata);
    console.log('Movies seeded successfully!');
  } catch (error) {
    console.error('Error seeding movies:', error);
  } finally {
    process.exit();
  }
}

seedMovies();