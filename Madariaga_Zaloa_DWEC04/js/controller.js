// controller.js
class MovieController {
    static init() {
        this.loadPopularMovies();
        this.loadTopRatedMovies();
    }

    static loadPopularMovies() {
        MovieModel.fetchMovies('popular').then(movies => {
            const container = document.getElementById('popular-movies');
            console.log (movies)
            MovieView.renderMovies(movies, container);
        });
    }

    static loadTopRatedMovies() {
        MovieModel.fetchMovies('top_rated').then(movies => {
            const container = document.getElementById('top-rated-movies');
            MovieView.renderMovies(movies, container);
        });
    }

    static loadMovieDetails(movieId, container) {
        MovieModel.fetchMovieDetails(movieId).then(movie => {
            MovieView.renderMovieDetails(movie, container);
        });
    }

    static compareMovies(movie1Id, movie2Id, container) {
        Promise.all([
            MovieModel.fetchMovieDetails(movie1Id),
            MovieModel.fetchMovieDetails(movie2Id)
        ]).then(([movie1, movie2]) => {
            MovieView.renderComparison(movie1, movie2, container);
        });
    }
}