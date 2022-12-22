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
          <meta name="naver-site-verification" content="566cff16301ad21a65297a04da6dcaa3c99379ca" />
        </Head>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
  
}

export default MyApp
