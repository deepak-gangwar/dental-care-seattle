import { Html, Head, Main, NextScript } from 'next/document'
import MetaTags from '@/component/MetaTags'

// Pages in Next.js skip the definition of the surrounding document's markup. 
// For example, you never include < html >, <body>, etc. To override that default 
// behavior, you must create a file at./ pages / _document.js, where you can extend 
// the Document class.

// https://nextjs.org/docs/advanced-features/custom-document
// https://stackoverflow.com/questions/51040669/next-js-use-of-app-js-and-document-js

export default function Document() {
  return (
    <Html lang="en">
      {/* The <Head /> component used in _document is not the same as next/head. 
      The <Head /> component used here should only be used for any <head> code that is common for all pages. 
      For all other cases, such as <title> tags, we recommend using next/head in your pages or components. */}
      <Head>
        <MetaTags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
