// model.js
const apiKey = 'a7c2773e87f6fa5259e87a8e51fcab51';
const apiUrl = 'https://api.themoviedb.org/3/movie/';

class MovieModel {
    static fetchMovies(category) {
        return fetch(`${apiUrl}${category}?api_key=${apiKey}&language=es-ES`)
            .then(response => response.json())
            .then(data => data.results)
            .catch(error => console.error('Error fetching movies:', error));
    }

    static fetchMovieDetails(movieId) {
        return fetch(`${apiUrl}${movieId}?api_key=${apiKey}&language=es-ES`)
            .then(response => response.json())
            .catch(error => console.error('Error fetching movie details:', error));
    }
}