import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0, backgroundColor: '#0A0A0A' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
