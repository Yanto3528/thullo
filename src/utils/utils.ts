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
  return (Math.random() * 100 + new Date().getTime()).toString()
}

export const calculateTextareaRows = (
  element: HTMLTextAreaElement,
  padding = 20,
  minRows = 1,
  maxRows = 5,
  lineHeight = 15
) => {
  const previousRows = element.rows
  element.rows = minRows // reset number of rows in textarea
  const textareaScrollHeight = element.scrollHeight - padding

  const currentRows = ~~(textareaScrollHeight / lineHeight) // eslint-disable-line

  if (currentRows === previousRows) {
    element.rows = currentRows
  }

  if (currentRows >= maxRows) {
    element.rows = maxRows
    element.scrollTop = element.scrollHeight
  }
  return currentRows < maxRows ? currentRows : maxRows
}
