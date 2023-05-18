import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GCLVXC');`}}></Script>
          <style />
          <title>모두다 행정사</title>
          <meta name="description" content="전국에서 음주운전 구제를 가장 많이 진행한 음주운전 면허 취소 구제 전문가 '모두다행정사'"></meta>
          <meta property="og:image" content="https://www.moduda-life.com/myimages/mobileLogo.png"></meta>
          <meta property="og:url" content="https://www.moduda-life.com"></meta>
          <meta name="naver-site-verification" content="33890257119de722dc41009e8b9014fdce04c04f" />
          <meta name="naver-site-verification" content="566cff16301ad21a65297a04da6dcaa3c99379ca" />

        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GCLVXC"
          height="0" width="0" style={"display:none;visibility:hidden" || undefined}></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
