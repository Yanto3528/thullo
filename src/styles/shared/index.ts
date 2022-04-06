import { css } from 'styled-components'

import { Spacing } from './types'

export * from './types'

export const spacingStyles = css<Spacing>`
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};

  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-left: ${({ pl }) => pl};
  padding-right: ${({ pr }) => pr};
`
