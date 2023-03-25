import React from 'react'
import * as Bt from'./optionsbuttons'

export interface ButtonProps {
  name?: string
  backgroundColor?: string
  grid?: string
}

const OptionsButton: React.FC<ButtonProps> = ({ name, backgroundColor, grid }) => {
  return (
    <Bt.Button backgroundColor={ backgroundColor } grid={grid}>{ name }</Bt.Button>
  )
}

export default OptionsButton