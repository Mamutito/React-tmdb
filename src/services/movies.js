const API_KEY = '7949795c1c6ccb9b9faab288342d1c32'


export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}

export const popularMovies = async (setMovies) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      const json = await response.json()
      const movies = json.results
      console.log(movies);
      setMovies(movies?.map(movie => ({
        id: movie.id,
        title: movie.Title,
        year: movie.release_date,
        image: movie.poster_path,
        popularity: movie.popularity
      })))
    } catch (e) {
      throw new Error('Error searching movies')
    }
  }