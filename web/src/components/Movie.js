import React from 'react'

const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Ratings: {movie.ratings}</p>
      <p>Synopsis: {movie.synopsis}</p>
    </div>
  )
}

export default Movie
/* In this React Component: we are destructuring the movie prop and returning a div with the movie's title, year, genre, ratings, and synopsis.
This is a functional component that is used in SearchMovies.js.
Technically speaking this functional component recieves a prop called movie, which is an object with the movie's title, year, genre, ratings, and synopsis.
This is made possible by the TheMovieDB API, GraphQL, and RedwoodJS technologies all working together in the background and externally.
*/
