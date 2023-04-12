// Import movie data fetcher functions
import {
  searchMovies,
  getMovieDetails,
  getSimilarMovies,
} from './movieDataFetcher'

// Define resolvers
export const searchMoviesResolver = async ({ query }) => {
  return searchMovies(query)
}

export const getMovieDetailsResolver = async ({ id }) => {
  return getMovieDetails(id)
}

export const getSimilarMoviesResolver = async ({ id }) => {
  return getSimilarMovies(id)
}

/* Above here the Query function implements the logic to search for movies using the movie data fetcher.
 This file contains the GraphQL service, which maps the GraphQL queries to the data fetching functions in api>src>servcies>movieDataFetcher.js.
*/
