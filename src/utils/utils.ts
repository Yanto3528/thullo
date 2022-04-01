import { css, FlattenSimpleInterpolation } from 'styled-components'

export const getMediaQuery = (screenSize: number) => {
  return (...args: [FlattenSimpleInterpolation]) =>
    css`
      @media (max-width: ${screenSize}px) {
        ${args}
      }
    `
}

export const generateId = () => {
  return Math.random() * 100 + new Date().toString()
}
