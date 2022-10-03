import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <title>PANGCAH Festival</title>
        <Head>
        <link rel="icon" href="/assets/icon/favicon.svg" />
        <meta property="og:url" content="pangcahfestival.com" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="your fb app id" /> */}
        <meta
          property="og:title"
          content="2022 PANGCAH Festival"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="PANGCAH Festival 於2022/10/08 - 2022/10/09在花蓮大農大富平地森園區，邀您一起來享受在地文化及音樂"
        />
        {/* <meta property="og:image" content={"url of image"} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
