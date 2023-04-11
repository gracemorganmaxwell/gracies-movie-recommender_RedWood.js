import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logIn } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    await logIn({ email, password })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
