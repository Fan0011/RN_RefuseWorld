import Document, { Head, Html, Main, NextScript } from "next/document";

class RefugeDocument extends Document {
  render() {
    return (
      <Html lang="en" className="antialiased">
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/visuelt-light.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/fonts/visuelt-medium.woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload" as="image" href="/images/navigation-smile.svg" />
          <link
            rel="preload"
            as="image"
            href="/images/navigation-smile-white.svg"
          />
          <link rel="dns-prefetch" href="https://use.typekit.net/" />
          <link
            rel="preload"
            href="https://use.typekit.net/rqu7mun.css"
            as="style"
          />
          <link rel="stylesheet" href="https://use.typekit.net/rqu7mun.css" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="text-small sm:text-base font-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RefugeDocument;
