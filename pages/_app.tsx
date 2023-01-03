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
          <title>모두다행정사</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
  
}

export default MyApp
