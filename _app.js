// import App from 'next/app'

import { useEffect } from "react"
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = url => {
          console.log('App is changing to: ', url)
        }
      
        Router.events.on('routeChangeStart', handleRouteChange)
        return () => {
          Router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])


    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp