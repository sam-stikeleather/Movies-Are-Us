async function newFormHandler(event) {
  event.preventDefault();
  const has_seen = document.querySelector('#has_seen:checked') ? true : false;
  const movieId = document.querySelector('#movieLink').getAttribute('href').split('/').pop();

  try {
    const response = await fetch('/has_seen', {
      method: 'POST',
      body: JSON.stringify({
        movieId,
        has_seen,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (err) {
    alert(`Failed to add to Watched list: ${err.message}`);
  }
}

document.querySelector('.has-seen-form').addEventListener('submit', newFormHandler);
