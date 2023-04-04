// To see their performance implications, see the github repo
// https://github.com/sanity-io/next-sanity

import { createClient } from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: "7wskfu89",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: false,
}

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)