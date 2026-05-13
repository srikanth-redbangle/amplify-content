import { useSessionStorage } from './useSessionStorage'

export const allowedParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'mid',
  'gclid',
  'source',
]

export const useFormMeta = () => {
  const values = useSessionStorage(allowedParams)

  return values
}
