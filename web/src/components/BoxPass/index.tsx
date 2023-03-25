import React from 'react'
import * as BoxPass from './boxpass'
import HeaderBoxPass from '../HeaderBoxPass'
import LevelXP from '../LevelXP';

const Boxpass: React.FC = () => {
  return (
    <BoxPass.Container>
      <HeaderBoxPass />
      <LevelXP color={'purple'}/>
    </BoxPass.Container>
  )
}

export default Boxpass