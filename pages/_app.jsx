import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
export default MyApp
