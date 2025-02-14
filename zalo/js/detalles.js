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

    // Obtener películas populares y mejor valoradas
    Promise.all([
        MovieModel.fetchMovies('popular'),
        MovieModel.fetchMovies('top_rated')
    ]).then(([popularMovies, topRatedMovies]) => {
        // Combinar ambas listas y eliminar duplicados
        const allMovies = [...popularMovies, ...topRatedMovies];
        const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
            .map(id => allMovies.find(movie => movie.id === id));

        // Llenar el selector
        const movieSelect = document.getElementById('movie');
        movieSelect.innerHTML = '<option value="">Seleccionar película</option>';
        uniqueMovies.forEach(movie => {
            movieSelect.innerHTML += `<option value="${movie.id}">${movie.title}</option>`;
        });
    });
});