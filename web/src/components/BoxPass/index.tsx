import React from 'react'
import * as BoxPass from './boxpass'
import HeaderBoxPass from '../HeaderBoxPass'
import LevelXP from '../LevelXP';
import Options from '../Options';

const Boxpass: React.FC = () => {
  return (
    <BoxPass.Container>
      <HeaderBoxPass />
      <LevelXP color={'purple'}/>
      <Options />
    </BoxPass.Container>
  )
}

export default Boxpass