import { css, FlattenSimpleInterpolation } from 'styled-components'

export const getMediaQuery = (screenSize: number) => {
  return (...args: [FlattenSimpleInterpolation]) =>
    css`
      @media (max-width: ${screenSize}px) {
        ${args}
      }
    `
}
