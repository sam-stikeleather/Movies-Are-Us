document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/movies', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var tableBody = document.getElementById('movie-table-body');
        var moviePartial = Handlebars.compile(
          document.getElementById('movie-partial').innerHTML
        );
        data.forEach(function (movie) {
          tableBody.innerHTML += moviePartial(movie);
        });
      }
    };
    xhr.send();
  });