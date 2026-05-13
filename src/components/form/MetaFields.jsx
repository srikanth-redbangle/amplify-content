import { Fragment } from 'react'
import { useFormMeta } from '@/hooks'

export const MetaFields = () => {
  const metaValues = useFormMeta()

  return (
    <Fragment>
      {Object.entries(metaValues ?? {})
        .filter(([k, v]) => v != null)
        .map(([k, v]) => (
          <input hidden defaultValue={v} name={k} type="text" key={v} />
        ))}
    </Fragment>
  )
}
