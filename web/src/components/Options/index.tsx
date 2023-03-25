import React, { Context, useContext } from 'react'
import * as Op from './options'
import OptionsButton from '../OptionsButtons'
import { VisibilityProviderValue, VisibilityCtx } from '../../providers/VisibilityProvider'

const Options: React.FC = () => {
  const { showBattlePass } = useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
  return (
    <Op.Box>
      <OptionsButton backgroundColor='black' grid='1 / 1 / 3 / 2' name='Battle Pass' onclick={showBattlePass}/>
      <OptionsButton backgroundColor='green' grid='1 / 2 / 2 / 3' name='Comum'/>
      <OptionsButton backgroundColor='red' grid='1 / 3 / 2 / 4' name='LENDARIO' />
      <OptionsButton backgroundColor='blue' grid='2 / 2 / 3 / 3' name='RARO'/>
      <OptionsButton backgroundColor='gold' grid='2 / 3 / 3 / 4' name='EPIC'/>
    </ Op.Box>
  )
}

export default Options