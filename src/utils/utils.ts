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

export const calculateTextareaRows = (element: HTMLTextAreaElement, minRows = 1, maxRows = 5) => {
  const previousRows = element.rows
  const { lineHeight, paddingTop, paddingBottom } = window.getComputedStyle(element)

  const computedLineHeight = parseInt(lineHeight.replace('px', ''), 10)
  const computedPaddingTop = parseInt(paddingTop.replace('px', ''), 10)
  const computedPaddingBottom = parseInt(paddingBottom.replace('px', ''), 10)
  const computedPadding = computedPaddingTop + computedPaddingBottom

  element.rows = minRows // reset number of rows in textarea
  const textareaScrollHeight = element.scrollHeight - computedPadding

  const currentRows = ~~(textareaScrollHeight / computedLineHeight) // eslint-disable-line

  if (currentRows === previousRows) {
    element.rows = currentRows
  }

  if (currentRows >= maxRows) {
    element.rows = maxRows
    element.scrollTop = element.scrollHeight
  }
  return currentRows < maxRows ? currentRows : maxRows
}

export const mergeDeep = (sourceObj: Record<string, unknown>, ...otherObjs: Record<string, unknown>[]) => {
  otherObjs.forEach((otherObj) => {
    Object.keys(otherObj).forEach((key) => {
      const sourceObjValue = sourceObj[key]
      const otherObjValue = otherObj[key]

      if (typeof sourceObjValue === 'object' && typeof otherObjValue === 'object') {
        sourceObj[key] = mergeDeep({ ...sourceObjValue }, { ...otherObjValue })
      } else {
        sourceObj[key] = otherObjValue
      }
    })
  })

  return sourceObj
}
