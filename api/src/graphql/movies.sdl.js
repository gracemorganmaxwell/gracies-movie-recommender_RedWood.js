export const schema = gql`
  type Movie {
    id: Int
    title: String
    year: Int
    genre: String
    ratings: String
    synopsis: String
  }

  type Query {
    searchMovies(query: String!): [Movie!]!
    getMovieDetails(id: Int!): Movie
    getSimilarMovies(id: Int!): [Movie!]!
  }
`
