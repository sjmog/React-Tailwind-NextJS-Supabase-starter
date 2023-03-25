import { Fragment } from 'react'
import { Navigation } from '@/components/Navigation'

export default function withLayout(Component) {
  return function WithLayout(props) {
    return(
      <>
        <Navigation />
        <Component {...props} />
      </>
    )
  }
}
