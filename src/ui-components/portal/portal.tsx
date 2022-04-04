import React, { useEffect, useState, memo } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC = memo(({ children }) => {
  const [mount, setMount] = useState<HTMLDivElement>()

  useEffect(() => {
    let portalRoot = document.getElementById('portal-root')

    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.setAttribute('id', 'portal-root')

      document.body.appendChild(portalRoot)
    }

    setMount(portalRoot as HTMLDivElement)
    return () => {
      if (mount) {
        document.body.removeChild(mount)
      }
    }
    // eslint-disable-next-line
  }, [])

  return mount ? createPortal(children, mount) : null
})
