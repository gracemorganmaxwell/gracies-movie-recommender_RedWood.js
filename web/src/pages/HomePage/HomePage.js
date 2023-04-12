import Favorites from 'src/components/Favorites'
import SearchMovies from 'src/components/SearchMovies'

const HomePage = ({ user }) => {
  return (
    <div>
      <h1>Movie Recommender</h1>
      <SearchMovies />
      {user && <Favorites user={user} />}
    </div>
  )
}

export default HomePage
