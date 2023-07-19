document.addEventListener('DOMContentLoaded', function() {
  var movies = [];

  // Function to render the table with the provided data
  function renderTable(data) {
    movies = data.movies;

    var movieTableTemplate = Handlebars.compile(
      document.getElementById('movie-table').innerHTML
    );
    var html = movieTableTemplate({ movies: movies });
    document.getElementById('movie-table').innerHTML = html;

    // Add click event listeners to sortable buttons
    var sortableButtons = document.querySelectorAll('.sortable');
    sortableButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var sortKey = button.dataset.sortKey;
        sortMovies(sortKey);
      });
    });
  }

  // Function to sort the movies based on the selected key
  function sortMovies(key) {
    movies.sort(function(a, b) {
      var valueA = a[key];
      var valueB = b[key];

      if (key === 'title') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });

    renderTable({ movies: movies });
  }

  // Fetch movie data from movieData.json
  fetch('movieData.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      renderTable(data);
    })
    .catch(function(error) {
      console.log('Error fetching movie data:', error);
    });
});

async function newFormHandler(event) {
  event.preventDefault();
  const has_watched = document.querySelector('#has_seen:checked') ? true : false;
  // Send fetch request to add a new dish
  const response = await fetch(`/home-routes`, {
    method: 'POST',
    body: JSON.stringify({
      has_watched,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to add to Watched list');
  }
}

document.querySelector('.has-seen-form').addEventListener('submit', newFormHandler);