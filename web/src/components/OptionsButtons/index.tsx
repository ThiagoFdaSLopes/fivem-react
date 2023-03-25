import React from 'react'
import * as Bt from'./optionsbuttons'

export interface ButtonProps {
  name?: string
  backgroundColor?: string
  grid?: string
  img?: string
}

const OptionsButton: React.FC<ButtonProps> = ({ name, backgroundColor, grid, img }) => {
  return (
    <Bt.Button backgroundColor={ backgroundColor } grid={grid}>
      <p>{name}</p>
    </Bt.Button>
  )
}

export default OptionsButton