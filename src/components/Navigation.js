import { supabase } from '@/lib/initSupabase'
import { useRouter } from 'next/router'

export function Navigation() {
  const router = useRouter()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error.message)
    } else {
      router.push('/login')
    }
   }

   return (
     <header>
       <nav>
         {/* Navigation links */}
         <button onClick={handleLogout}>Log out</button>
       </nav>
     </header>
   )
}