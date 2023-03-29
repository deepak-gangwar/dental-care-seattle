import { Html, Head, Main, NextScript } from 'next/document'

// Pages in Next.js skip the definition of the surrounding document's markup. 
// For example, you never include < html >, <body>, etc. To override that default 
// behavior, you must create a file at./ pages / _document.js, where you can extend 
// the Document class.

// https://nextjs.org/docs/advanced-features/custom-document
// https://stackoverflow.com/questions/51040669/next-js-use-of-app-js-and-document-js

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
