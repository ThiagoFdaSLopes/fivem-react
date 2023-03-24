import React from 'react'
import * as Bt from './button'
import { fetchNui } from '../../utils/fetchNui'

interface Props {
  name: String
}

export const Button: React.FC<Props> = ({ name }) => {
  const handleToogle = () => {
    fetchNui('hideFrame').then((sucesso) => console.log(sucesso))
  }
  return (
    <Bt.ButtonStyle onClick={handleToogle}>{name}</Bt.ButtonStyle>
  )
}
