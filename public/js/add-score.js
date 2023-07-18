async function newFormHandler(event) {
    event.preventDefault();
    const movie_title = document.querySelector('#movie_title').value;
    const score = document.querySelector('#score').value;

    const response = await fetch(`/api/movie`, {
        method: 'POST',
        body: JSON.stringify({
            movie_title,
            score,
        }),
        headers: {
            'Content_Type' : 'application/json',
        },
    });
    //if the score is added, the 'all' template will be rendered
    if  (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add score');
    }
}

document.querySelector('.new_movie_score').addEventListener('submit', newFormHandler);