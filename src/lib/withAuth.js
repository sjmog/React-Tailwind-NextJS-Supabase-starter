import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from './initSupabase'

export default function withAuth(Component) {
  return function WithAuth(props) {
    const router = useRouter()
    useEffect(() => {
      const redirectIfNoUser = async () => {
        const { data: { user } } = await supabase.auth.getUser()

        if(!user) router.replace('/login')
      }

      redirectIfNoUser()
    }, [])

    return <Component {...props} />
  }
}
