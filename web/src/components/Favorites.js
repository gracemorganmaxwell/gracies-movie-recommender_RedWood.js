import { useQuery } from '@redwoodjs/web'

import Movie from './Movie'

const GET_SIMILAR_MOVIES = gql`
  query GetSimilarMovies($id: Int!) {
    getSimilarMovies(id: $id) {
      id
      title
      year
      genre
      ratings
      synopsis
    }
  }
`
const Favorites = ({ user }) => {
  const { data, loading, error } = useQuery(GET_SIMILAR_MOVIES, {
    variables: { id: user.favoriteMovies[0].id },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h2>Your favorite movies:</h2>
      {user.favoriteMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <h2>Recommended movies based on your favorites:</h2>
      {data?.getSimilarMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Favorites

/*
In this React Component: we are using the useState hook to create a state variable called searchQuery, which is initialized to an empty string.
This is a functional component that displays the user's favorite movies and fetches movie recommendations based on the user's favorites using the getSimilarMovies GraphQL query.
This is made possible by the TheMovieDB API, GraphQL, and RedwoodJS technologies all working together in the background and externally.
*/
