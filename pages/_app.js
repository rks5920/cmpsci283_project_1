import Head from 'next/head'
import { StateContext } from "@/context/StateContext"
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'dogica';
    src: url('/fonts/dogica.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  background-color: #d2cbbb;
  }

  * 
  {
    font-family: 'dogica', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 50;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Flash Back</title>
          <meta name='description' content='Put a description here about your app'/>
          <meta name='robots' content='index, follow'/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon_package/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <GlobalStyle />
        
        

      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}
