const API_KEY = '7949795c1c6ccb9b9faab288342d1c32' //TMDB API KEY
const API_IMG = "https://image.tmdb.org/t/p/w500/"; //BasePath url
const ACCESS_TOKEN_AUTH = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ5Nzk1YzFjNmNjYjliOWZhYWIyODgzNDJkMWMzMiIsInN1YiI6IjY1ZTdiNTgwOTYzODY0MDE0NmM3Zjk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F-3k7fTWo_boaye42PoDWqAF0kPZhHTjR0eewRZRz34";

export const searchMovies = async (search, setMovies) => {
  if (search === '') return null
  console.log('search',search)
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
    const json = await response.json()

    const movies = json.results

    setMovies(movies?.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date,
      image: movie.poster_path ? API_IMG+movie.poster_path : null,
      popularity: movie.popularity
    })))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

export const trendingMovies = async (setMovies) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      const json = await response.json()
      const movies = json.results
      setMovies(movies?.map(movie => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date,
        image: movie.poster_path ? API_IMG+movie.poster_path : null,
        popularity: movie.popularity,
        overview: movie.overview,
        backPoster: movie.backdrop_path
      })))
    } catch (e) {
      throw new Error('Error getting popular movies')
    }
  }

  export const getMovie = async (id, setMovie) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      const movie = await response.json()

      setMovie({
        id: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        image: movie.poster_path ? API_IMG+movie.poster_path : null,
        popularity: movie.popularity,
        overview: movie.overview,
        backPoster: movie.backdrop_path ? API_IMG+movie.backdrop_path : null,
        rating: movie.vote_average,
        ratingCount: movie.vote_count
      })
    } catch (e) {
      throw new Error('Error getting the movie')
    }
  }
  export const sendRating = async (id, user, rating) => {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
        },
        body: `{"value":${rating}}`
      };
      
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/rating?guest_session_id=${user}`, options);
        const data = await response.json(); // Parse the response
        return data;
      } catch (error) {
        console.error(error);
        throw new Error('Error sending rating');
      }
    };