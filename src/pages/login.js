import { useState, useEffect } from 'react'
import { supabase } from '@/lib/initSupabase'
import { useRouter } from 'next/router'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const redirectIfUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      if(user) router.replace('/')
    }

    redirectIfUser()
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
