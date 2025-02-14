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

    // Obtener películas populares y mejor valoradas
    Promise.all([
        MovieModel.fetchMovies('popular'),
        MovieModel.fetchMovies('top_rated')
    ]).then(([popularMovies, topRatedMovies]) => {
        // Combinar ambas listas y eliminar duplicados
        const allMovies = [...popularMovies, ...topRatedMovies];
        const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
            .map(id => allMovies.find(movie => movie.id === id));

        // Llenar los selectores
        const movieSelects = document.querySelectorAll('#movie1, #movie2');
        movieSelects.forEach(select => {
            select.innerHTML = '<option value="">Seleccionar película</option>';
            uniqueMovies.forEach(movie => {
                select.innerHTML += `<option value="${movie.id}">${movie.title}</option>`;
            });
        });
    });
});