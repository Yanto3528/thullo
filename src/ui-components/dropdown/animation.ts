import { Variants } from 'framer-motion'

export const slideFadeIn: Variants = {
  initial: {
    opacity: 0,
    y: '100%',
    x: '100%',
    scale: 0.7,
    transformOrigin: 'top center',
  },
  animate: {
    opacity: 1,
    y: '100%',
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
    x: '100%',
    scale: 0.7,
    transition: {
      duration: 0.2,
    },
  },
}
