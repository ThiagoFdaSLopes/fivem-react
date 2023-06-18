import React, { useEffect, useState } from 'react'
import * as BoxPass from './boxpass'
import HeaderBoxPass from '../HeaderBoxPass'
import { useVisibility } from '../../providers/VisibilityProvider';
import LevelXP from '../LevelXP';
import Options from '../Options';
import ContainerSlick from '../ContainerSlick';

const Boxpass: React.FC = () => {
  const { sBattlePass, dataPlayer } = useVisibility();
  const exp = Number(((dataPlayer.experience * 100) / 3000).toFixed(2))
  return (
    <>
    { !sBattlePass ? (
      <BoxPass.Container>
      <HeaderBoxPass />
      <LevelXP color='black' width={exp}/>
      <Options />
    </BoxPass.Container>
    ) : (
      <BoxPass.ContainerPass>
        <HeaderBoxPass />
        <LevelXP color='black' width={exp}/>
        <ContainerSlick />
      </BoxPass.ContainerPass>
    ) }
    
    </>
  );
}

export default Boxpass