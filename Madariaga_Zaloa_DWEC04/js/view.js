// view.js
class MovieView {
    static renderMovies(movies, container) {
        container.innerHTML = movies.map(movie => `
            <div class="movie-item">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Fecha de lanzamiento: ${movie.release_date}</p>
                <p>Puntuación: ${movie.vote_average}</p>
            </div>
        `).join('');
    }

    static renderMovieDetails(movie, container) {
        container.innerHTML = `
            <div class="detalles">
                <h3>${movie.title}</h3>
                <div class="movie-info">
                    <div class="imagen">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    </div>
                    <div class="infor">     
                        <p><strong>Fecha de lanzamiento:</strong> ${movie.release_date}</p>
                        <p><strong>Puntuación:</strong> ${movie.vote_average}</p>
                        <p><strong>Resumen:</strong> ${movie.overview}</p>
                        <p><strong>Géneros:</strong> ${movie.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong>Duración:</strong> ${movie.runtime} minutos</p>
                        <p><strong>Idioma original:</strong> ${movie.original_language.toUpperCase()}</p>
                    </div>
                </div>
            </div>
        `;
    }

    static renderComparison(movie1, movie2, container) {
        // Función para determinar qué imagen mostrar
        const getComparisonImage = (value1, value2) => {
            if (value1 > value2) {
                return `<img src="../images/ona.png" alt="Mayor" style="width: 20px; height: auto; vertical-align: middle; margin-left: 5px;">`;
            } else if (value1 < value2) {
                return `<img src="../images/txarra.png" alt="Menor" style="width: 20px; height: auto; vertical-align: middle; margin-left: 5px;">`;
            }
            return ''; // Si son iguales, no mostrar imagen
        };
        

        // Comparar propiedades
        const voteAverageComparison1 = getComparisonImage(movie1.vote_average, movie2.vote_average);
        const voteAverageComparison2 = getComparisonImage(movie2.vote_average, movie1.vote_average);

        const popularityComparison1 = getComparisonImage(movie1.popularity, movie2.popularity);
        const popularityComparison2 = getComparisonImage(movie2.popularity, movie1.popularity);

        const revenueComparison1 = getComparisonImage(movie1.revenue, movie2.revenue);
        const revenueComparison2 = getComparisonImage(movie2.revenue, movie1.revenue);

        // Renderizar la comparación
        container.innerHTML = `
            <div class="compare">
                <div class="comparison-header">
                    <h3>Comparando: ${movie1.title} vs ${movie2.title}</h3>
                </div>
                <div class="comparison-container">
                    <div class="comparison-item">
                        <div class="movie">
                            <h4>${movie1.title}</h4>
                            <img src="https://image.tmdb.org/t/p/w500${movie1.poster_path}" alt="${movie1.title}">
                            <p><strong>Fecha de lanzamiento:</strong> ${movie1.release_date}</p>
                            <p><strong>Puntuación:</strong> ${movie1.vote_average} ${voteAverageComparison1}</p>
                            <p><strong>Popularidad:</strong> ${movie1.popularity} ${popularityComparison1}</p>
                            <p><strong>Recaudación:</strong> $${movie1.revenue.toLocaleString()} ${revenueComparison1}</p>
                        </div>
                    </div>
                    <div class="comparison-item">
                        <div class="movie">
                            <h4>${movie2.title}</h4>
                            <img src="https://image.tmdb.org/t/p/w500${movie2.poster_path}" alt="${movie2.title}">
                            <p><strong>Fecha de lanzamiento:</strong> ${movie2.release_date}</p>
                            <p><strong>Puntuación:</strong> ${movie2.vote_average} ${voteAverageComparison2}</p>
                            <p><strong>Popularidad:</strong> ${movie2.popularity} ${popularityComparison2}</p>
                            <p><strong>Recaudación:</strong> $${movie2.revenue.toLocaleString()} ${revenueComparison2}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}