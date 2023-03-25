import Head from 'next/head'
import withAuth from '@/lib/withAuth'
import withLayout from '@/lib/withLayout'

function Home() {
  return (
    <main>
      Welcome home :)
    </main>
  )
}

export default withAuth(withLayout(Home))
