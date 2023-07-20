async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const release_date = document.querySelector('#release-date').value;
    const genre = document.querySelector('#genre').value;
    const rating = document.querySelector('#rating').value;
    const has_seen = document.querySelector('#has_seen:checked') ? true : false;
    // Send fetch request to add a movie
    const response = await fetch(`/api/movies`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        release_date,
        genre,
        rating,
        has_seen,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the movie is added, the 'profile' template will be rerendered
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add movie');
    }
  }

  document.querySelector('.add-movie-form').addEventListener('submit', newFormHandler);