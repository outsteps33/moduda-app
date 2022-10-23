import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/arrow.css';
import { SWRConfig } from 'swr';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{fetcher: (url: string ) => fetch(url).then((response) => response.json())}}>
      <div className="w-full mx-auto">
        
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
  
}

export default MyApp
