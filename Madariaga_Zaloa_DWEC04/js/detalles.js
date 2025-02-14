// detalles.js
document.addEventListener('DOMContentLoaded', () => {
    const detailsForm = document.getElementById('details-form');
    const movieDetails = document.getElementById('movie-details');

    detailsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const movieId = document.getElementById('movie').value;

        if (movieId) {
            MovieController.loadMovieDetails(movieId, movieDetails);
        } else {
            alert('Por favor selecciona una película para ver los detalles.');
        }
    });

    MovieModel.fetchPopularAndTopRated().then(movies => {
        const movieSelect = document.getElementById('movie');
        movieSelect.innerHTML = '<option value="">Seleccionar película</option>';
        movies.forEach(movie => {
            movieSelect.innerHTML += `<option value="${movie.id}">${movie.title}</option>`;
        });
    });
});