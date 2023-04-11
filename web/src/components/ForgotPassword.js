import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { client } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await client.requestPasswordRecovery(email)
      setMessage('Password recovery email has been sent!')
    } catch (error) {
      setMessage('Failed to send password recovery email.')
    }
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ForgotPassword
