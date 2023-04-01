export default function MetaTags() {
  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      {/* utf and viewport tags are automatically added by next.js */}
      {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}

      <base href="/" />
      {/* title & description is added at the page level */}
      <meta name="author" content="Deepak Gangwar" />
      <meta name="copyright" content="Copyright (c) 2023 Dental Care Seattle." />
      <meta name="theme-color" content="#fff" />
    </>
  )
}