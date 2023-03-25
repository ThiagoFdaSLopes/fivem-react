import React, { Context, useContext } from 'react'
import * as Bt from'./optionsbuttons'
// import { VisibilityProviderValue, VisibilityCtx } from '../../providers/VisibilityProvider'

export interface ButtonProps {
  name?: string
  backgroundColor?: string
  grid?: string
  img?: string
  onclick?: () => void
}

const OptionsButton: React.FC<ButtonProps> = ({ name, backgroundColor, grid, onclick }) => {
  return (
    <Bt.Button backgroundColor={ backgroundColor } grid={grid} onClick={onclick}>
      <p>{name}</p>
    </Bt.Button>
  )
}

export default OptionsButton