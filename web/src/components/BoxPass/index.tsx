import React, { Context, useContext } from 'react'
import * as BoxPass from './boxpass'
import HeaderBoxPass from '../HeaderBoxPass'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider';
import LevelXP from '../LevelXP';
import Options from '../Options';

const Boxpass: React.FC = () => {
  const { sBattlePass } = useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
  return (
    <>
    { !sBattlePass ? (
      <BoxPass.Container>
      <HeaderBoxPass />
      <LevelXP color={'black'}/>
      <Options />
    </BoxPass.Container>
    ) : (
      <div>Teste</div>
    ) }
    
    </>
  );
}

export default Boxpass