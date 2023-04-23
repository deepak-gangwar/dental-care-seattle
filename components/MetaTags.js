export default function MetaTags() {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      {/* utf and viewport tags are automatically added by next.js */}
      {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}

      <base href="/" />
      {/* title & description is added at the page level */}
      <meta name="author" content="Deepak Gangwar" />
      <meta name="copyright" content="Copyright (c) 2023 Dental Care Seattle." />
      <meta name="theme-color" content="#fff" />

      {/* See if you would like to add this */}
      {/* <meta name="google-site-verification" content="UAfdLLFfj8nWRfEa_tQ9SG14qQ3-f1zi1Y9o0Q8C1X8" /> */}

      {/* Preconnect hints the browser to start establishing a connection to the specified domain before the browser actually needs to use it. This can help speed up the loading of resources by reducing the time required to establish the connection when the resource is actually needed. */}
      {/* Using preconnect hints is common and is considered a best practice for optimizing the performance of your website. */}
      {/* UNCOMMENT THIS AFTER ADDING GTAG AND ANALYTICS */}
      {/* <link rel="preconnect" href="https://www.google-analytics.com" /> */}
      {/* <link rel="preconnect" href="https://www.googletagmanager.com" /> */}

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <link rel="canonical" href="https://www.dentalcareseattle.com" />

      {/* OG tags */}
      <meta property="og:site_name" content="Dental Care Seattle" />
      <meta property="og:title" content="Dental Care Seattle" />
      <meta property="og:url" content="https://www.dentalcareseattle.com" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      <meta property="og:image" content="/sharing.jpg" />
      <meta property="og:image:alt" content="Dental Care Seattle's website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter tags */}
      <meta name="twitter:title" content="Dental Care Seattle" />
      <meta name="twitter:image" content="/sharing.jpg" />
      <meta name="twitter:image:alt" content="Dental Care Seattle's website" />
      <meta name="twitter:url" content="https://www.dentalcareseattle.com" />
      {/* <meta name="twitter:card" content="summary" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />



      {/* Add application/ld+json (some kind of yoast schema graph for SEO) */}
      {/* See here - https://gist.github.com/deepak-gangwar/dc6b88b3ba69160edcd8b8c8c5b66229 */}




      {/* Add injected global CSS styles here */}
      {/* <style id="global-styles-inline-css" type="text/css">...</style> */}

      {/* Then the actual stylesheet (Automatically added by next.js */}
      {/* <link rel="stylesheet" type="text/css" href="https://squarespace.com/site.css" /> */}

      {/* Icon */}
      <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.svg" />

      {/* Noscript */}
      {/* Commented this out because next.js is adding this by its own */}
      {/* <noscript>&quot;<div id="no-js"><strong>Oops! This site cannot function properly without Javascript. Try to activate it or use a modern browser.</strong></div><style>body{margin: 0; overflow: hidden;} *{box - sizing: border-box;} strong{text - align: center;} #no-js{font - family: sans-serif; width: 100vw; padding: 0 20vw; height: 100vh; display: flex; justify-content: center; align-items: center; font-size: 3vw; position: fixed; top: 0; left: 0; background: #fff; z-index: 99999999;}</style>&quot;</noscript> */}



      {/* Embed Facebook Pixel Code */}
      {/* Gtag scripts */}
      {/* Add google maps */}




      {/* The following are tags for SEO. See more on schema.org */}
      {/* <meta itemprop="name" content="Dental Care Seattle" /> */}
      {/* <meta itemprop="url" content="https://www.dentalcareseattle.com" /> */}
      {/* <meta itemprop="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" /> */}
      {/* <meta itemprop="thumbnailUrl" content="http://static1.squarespace.com/static/590a3943c534a54d6465b3df/t/59c352bf1f318d489cddc03b/1505972927512/DCS_Logo_SocialSharing.jpg?format=1500w" /> */}
      {/* <link rel="image_src" href="http://static1.squarespace.com/static/590a3943c534a54d6465b3df/t/59c352bf1f318d489cddc03b/1505972927512/DCS_Logo_SocialSharing.jpg?format=1500w" /> */}
      {/* <meta itemprop="image" content="http://static1.squarespace.com/static/590a3943c534a54d6465b3df/t/59c352bf1f318d489cddc03b/1505972927512/DCS_Logo_SocialSharing.jpg?format=1500w" /> */}
    </>
  )
}