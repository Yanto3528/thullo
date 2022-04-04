import { Variants } from 'framer-motion'

export const slideFadeIn: Variants = {
  initial: {
    opacity: 0,
    y: '100%',
    x: '100%',
    scale: 0.5,
    transformOrigin: 'top left',
  },
  animate: {
    opacity: 1,
    y: '100%',
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
    x: '100%',
    scale: 0.5,
    transition: {
      duration: 0.4,
    },
  },
}
