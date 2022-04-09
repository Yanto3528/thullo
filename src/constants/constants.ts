import { getMediaQuery } from '@/utils'

export const MediaQuery = {
  /** @media(max-width: 1920px) */
  FULL_HD: getMediaQuery(1920),
  /** @media(max-width: 1660px) */
  LARGE_SCREEN: getMediaQuery(1660),
  /** @media(max-width: 1440px) */
  MEDIUM_SCREEN: getMediaQuery(1440),
  /** @media(max-width: 1366px) */
  SMALL_SCREEN: getMediaQuery(1366),
  /** @media(max-width: 1280px) */
  LAPTOP: getMediaQuery(1280),
  /** @media(max-width: 1024px) */
  DESKTOP: getMediaQuery(1024),
  /** @media(max-width: 960px) */
  RESPONSIVE: getMediaQuery(960),
  /** @media(max-width: 768px) */
  TABLET: getMediaQuery(768),
  /** @media(max-width: 640px) */
  DOUBLE_SMALLEST: getMediaQuery(640),
  /** @media(max-width: 426px) */
  PHABLET: getMediaQuery(426),
  /** @media(max-width: 375px) */
  PHONE: getMediaQuery(375),
  /** @media(max-width: 320px) */
  SMALLEST: getMediaQuery(320),
}

export enum Visibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}
