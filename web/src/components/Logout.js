import { useAuth } from '@redwoodjs/auth'

const Logout = () => {
  const { logOut } = useAuth()

  const handleLogout = async () => {
    await logOut()
    // Redirect to the home page or another appropriate page after logging out.
    // You can use Redwood's `navigate` function for this.
    // import { navigate } from '@redwoodjs/router'
    // navigate('/')
  }

  return <button onClick={handleLogout}>Log Out</button>
}

export default Logout
