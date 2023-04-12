import { useState } from 'react'

import { useQuery, gql } from '@redwoodjs/web'

import Movie from './Movie'

const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    searchMovies(query: $query) {
      id
      title
      year
      genre
      ratings
      synopsis
    }
  }
`

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, loading, error, refetch } = useQuery(SEARCH_MOVIES, {
    variables: { query: searchQuery },
    skip: true,
  })

  const handleSearch = () => {
    refetch({ query: searchQuery })
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Search</button>
      {data?.searchMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default SearchMovies
/* In this React Component: we are using the useState hook to create a state variable called searchQuery, which is initialized to an empty string.
This is a functional component that is used in SearchMoviesCell.js.
Technically speaking this functional component creates a search input field and a button to trigger a movie search.
This is made possible by the TheMovieDB API, GraphQL, and RedwoodJS technologies all working together in the background and externally.
*/
