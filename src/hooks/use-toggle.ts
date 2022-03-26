import { useState, useCallback } from 'react'

interface UseToggleReturnFunction {
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}
type UseToggleReturn = [boolean, UseToggleReturnFunction]

export const useToggle = (defaultValue = false): UseToggleReturn => {
  const [open, setOpen] = useState(defaultValue)

  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])
  const onToggle = useCallback(() => setOpen((currentOpen) => !currentOpen), [])

  return [open, { onOpen, onClose, onToggle }]
}
