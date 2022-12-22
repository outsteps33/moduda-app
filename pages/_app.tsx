import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/arrow.css';
import { SWRConfig } from 'swr';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{fetcher: (url: string ) => fetch(url).then((response) => response.json())}}>
      <div className="w-full mx-auto">
        <Head>
          <title>모두다 행정사</title>
          <meta name="description" content="모두다 행정사"></meta>
          <meta property="og:type" content="website"> 
            <meta property="og:title" content="모두다 행정사" />
            <meta property="og:description" content="모두다 행정사" />
            <meta property="og:url" content="http://www.moduda-life.com"></meta>
          </meta>
          <meta name="naver-site-verification" content="566cff16301ad21a65297a04da6dcaa3c99379ca" />
        </Head>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
  
}

export default MyApp
