import React, { useEffect, useState, memo } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC = memo(({ children }) => {
  const [mount, setMount] = useState<HTMLDivElement>()

  useEffect(() => {
    if (!mount) {
      const portalRoot = document.createElement('div')
      portalRoot.setAttribute('id', 'portal-root')

      setMount(portalRoot)
      document.body.appendChild(portalRoot)
    }

    return () => {
      if (mount) {
        document.body.removeChild(mount)
      }
    }
    // eslint-disable-next-line
  }, [])

  return mount ? createPortal(children, mount) : null
})
