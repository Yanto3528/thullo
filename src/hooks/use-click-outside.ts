import { useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Element)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
    // eslint-disable-next-line
  }, [])

  return ref
}
