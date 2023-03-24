import React from 'react'
import './button.css'
import { fetchNui } from '../../utils/fetchNui'

interface Props {
  name: String
}

export const Button: React.FC<Props> = ({ name }) => {
  const handleToogle = () => {
    fetchNui('hideFrame').then((sucesso) => console.log(sucesso))
  }
  return (
    <button onClick={handleToogle}>{name}</button>
  )
}
