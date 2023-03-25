import { useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/lib/initSupabase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const router = useRouter()

  const handleSignup = async (event) => {
    event.preventDefault()

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/confirm')
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
