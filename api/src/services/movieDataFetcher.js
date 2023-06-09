import axios from 'axios'

const apiKey = process.env.TMDB_API_KEY
const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
})

export const searchMovies = async (query) => {
  const response = await tmdbClient.get('/search/movie', { params: { query } })
  return response.data.results
}

export const getMovieDetails = async (id) => {
  const response = await tmdbClient.get(`/movie/${id}`)
  return response.data
}

export const getSimilarMovies = async (id) => {
  const response = await tmdbClient.get(`/movie/${id}/similar`)
  return response.data.results
}
// This file contains the functions to fetch movie data from TheMovieDB API using Axios.
