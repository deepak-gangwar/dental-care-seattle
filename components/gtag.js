// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// pageview(): To track users navigating to different pages.

export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// event(): To track events like add to cart, place order, etc.

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}