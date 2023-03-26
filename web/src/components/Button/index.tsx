import React from 'react'
import * as Bt from './button'

interface Props {
  name: String
  onclick?: () => void
}

export const Button: React.FC<Props> = ({ name, onclick }) => {
  return (
    <Bt.ButtonStyle onClick={onclick}>{name}</Bt.ButtonStyle>
  )
}
