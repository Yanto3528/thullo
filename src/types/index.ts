export interface Color {
  primary: string
  primaryLight: string
  primaryLight2: string
  lightGray: string
  lightGray2: string
  gray1: string
  gray2: string
  gray3: string
  gray4: string
  gray5: string
  white: string
  indigo: string
  green: string
  yellow: string
  orange: string
  red: string
  violet: string
  teal: string
  lightViolet: string
  lightOrange: string
  lightYellow: string
  lightGreen: string
}

export interface Radius {
  sm: string
  md: string
  lg: string
  pill: string
  rounded: string
}

export interface CardType {
  id: string
  title: string
}

export interface BoardType {
  id: string
  title: string
  coverImage?: string
  visibility?: string
}

export interface CommentType {
  id: string
  author: {
    name: string
    avatar: string
  }
  createdAt: Date
  content: string
}
