import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import { GridProps, columnsMap } from './types'

const minChildStyles = ({ minChildWidth, maxChildWidth = '1fr' }: Pick<GridProps, 'minChildWidth' | 'maxChildWidth'>) =>
  minChildWidth &&
  css`
    grid-template-columns: repeat(auto-fit, minmax(${minChildWidth}, ${maxChildWidth}));
  `

const columnStyles = ({ columns }: Pick<GridProps, 'columns'>) =>
  columns &&
  typeof columns !== 'object' &&
  css`
    grid-template-columns: repeat(${columns}, 1fr);
  `

const columnObjectStyles = ({ columns }: Pick<GridProps, 'columns'>) => {
  if (typeof columns !== 'object') {
    return undefined
  }

  if (Array.isArray(columns)) {
    return undefined
  }

  const mediaQueries: FlattenSimpleInterpolation[] = []
  let lastColumnValue = 0
  Object.entries(columnsMap).forEach(([columnKey, columnMediaQuery]) => {
    const key = columnKey as keyof GridProps['columns']
    const columnValue = parseInt(columns[key], 10)

    if (columnValue) {
      lastColumnValue = lastColumnValue === 0 ? columnValue : lastColumnValue
      mediaQueries.push(
        columnMediaQuery(css`
          grid-template-columns: repeat(${columnValue}, 1fr);
        `)
      )
    }
  })

  if (lastColumnValue > 0) {
    mediaQueries.unshift(css`
      grid-template-columns: repeat(${lastColumnValue}, 1fr);
    `)
  }

  return mediaQueries
}

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap};
  column-gap: ${({ columnGap }) => columnGap};
  row-gap: ${({ rowGap }) => rowGap};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justify }) => justify};

  ${columnStyles};
  ${minChildStyles};
  ${columnObjectStyles};

  ${({ customStyle }) => customStyle && css(customStyle)};
`
