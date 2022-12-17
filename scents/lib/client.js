// const sanityClient = require('@sanity/client')
import sanityClient from '@sanity/client'
import React from 'react'
import { createClient } from "next-sanity";

import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'di9lepd6',
  dataset: 'production',
  apiVersion: '2022-12-15',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}