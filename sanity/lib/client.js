import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn,
  perspective: 'published',
})
