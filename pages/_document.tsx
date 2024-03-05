import { Head, Html, Main, NextScript } from "next/document";

/*type CustomProps = {
    socials: Social[];

}*/
export default function Document() {
  return (
    <Html lang="en">
      <title>We Talk Data & AI</title>
      <Head>
        <meta property="og:title" content="WeTalkDATA&AI" />
              <meta property="og:description" content="We Talk Data & AI Tech Talk" key="desc" />
              <meta property="og:url" content="https://we-talk-data-app.vercel.app/" />
              <meta property="og:image" content="https://cdn.sanity.io/images/mwsnru9v/production/9df6e196ed5265c96d3ec77c9055e7521448e855-3072x1536.webp?w=2000&fit=max&auto=format" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
