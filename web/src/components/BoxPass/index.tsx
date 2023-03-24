import React from 'react'
import * as BoxPass from './boxpass'
import HeaderBoxPass from '../HeaderBoxPass/HeaderBoxPass'
import LevelXP from '../LevelXP/LevelXP';

const Boxpass: React.FC = () => {
  return (
    <BoxPass.Container>
      <HeaderBoxPass />
      <LevelXP />
    </BoxPass.Container>
  )
}

export default Boxpass