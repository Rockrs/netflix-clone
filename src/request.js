const API_KEY = 'da45ca68c9d11cffd55f6e2115739989';

const requests = {
    fetchTrendingNow : `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;