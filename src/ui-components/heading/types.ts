export interface HeadingProps {
  size?: string
  weight?: string | number
  family?: string
  as?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
}
