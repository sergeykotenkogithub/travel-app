import { ClientConfig, createClient, createPreviewSubscriptionHook } from "next-sanity"
import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

const config = {
    projectId: "qt34e2i8",
    dataset: "production",
    // token: process.env.SANITY_API_TOKEN,
    token: "skyNXPVmHJOUmu0fSOSczPRayZKCK1lA9yeQEVUCC78Nkj3BSlMntDgyHx6lRKyAPHI0EnrJdbsD9YPAYaRS6ltU83H22DZFuU0GWufaMOiMi39nPr9g5KgFNmCD7GBHlKbIqDXnMceCJePTnQHBiqfTRqrSU9H8toAXa9TxTRpH7UTzzZXY",
    apiVersion: '2021-10-21',
    useCdn: false
}

export const sanityClient = createClient(config)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)
export const urlFor = source => createImageUrlBuilder(config).image(source)
export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />