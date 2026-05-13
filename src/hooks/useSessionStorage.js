import { useEffect, useState } from 'react'

export const useSessionStorage = (names) => {
  const [value, setValue] = useState({})

  useEffect(() => {
    setValue(
      names?.reduce((prev, n) => {
        return { ...prev, [n]: sessionStorage.getItem(n) }
      }, {})
    )
  }, [names])
  return value
}
