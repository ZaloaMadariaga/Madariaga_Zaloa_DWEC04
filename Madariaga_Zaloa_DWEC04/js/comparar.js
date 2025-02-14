// comparar.js
document.addEventListener('DOMContentLoaded', () => {
    const compareForm = document.getElementById('compare-form');
    const comparisonResult = document.getElementById('comparison-result');

    compareForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const movie1Id = document.getElementById('movie1').value;
        const movie2Id = document.getElementById('movie2').value;

        if (movie1Id && movie2Id) {
            MovieController.compareMovies(movie1Id, movie2Id, comparisonResult);
        } else {
            alert('Por favor selecciona dos películas para comparar.');
        }
    });

    MovieModel.fetchPopularAndTopRated().then(movies => {
        const movieSelects = document.querySelectorAll('#movie1, #movie2');
        movieSelects.forEach(select => {
            select.innerHTML = '<option value="">Seleccionar película</option>';
            movies.forEach(movie => {
                select.innerHTML += `<option value="${movie.id}">${movie.title}</option>`;
            });
        });
    });
});