import React from 'react'

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  cursor?: React.CSSProperties['cursor']
}

export interface CardComposition {
  Body: React.FC
}
