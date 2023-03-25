import React from 'react'
import * as Op from './options'
import OptionsButton from '../OptionsButtons'
import './teste.css'

const Options: React.FC = () => {
  return (
    <Op.Box>
      <OptionsButton backgroundColor='black' grid='1 / 1 / 3 / 2'/>
      <OptionsButton backgroundColor='green' grid='1 / 2 / 2 / 3'/>
      <OptionsButton backgroundColor='red' grid='1 / 3 / 2 / 4'/>
      <OptionsButton backgroundColor='blue' grid='2 / 2 / 3 / 3'/>
      <OptionsButton backgroundColor='gold' grid='2 / 3 / 3 / 4'/>
    </ Op.Box>
  )
}

export default Options