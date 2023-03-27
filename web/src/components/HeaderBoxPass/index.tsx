import React from 'react'
import * as Header from './HeaderBoxPass'
import battlepassimg from '../../imgs/battlepass.png';
import { useVisibility } from '../../providers/VisibilityProvider';

const HeaderBoxPass: React.FC = () => {

  const { visible, setData, dataPlayer } = useVisibility()

  return (
    <Header.HeaderBoxPassContainer>
      <Header.TitleDiv>
        <img src={battlepassimg} alt="battle pass"/>
        <Header.TagsPDiv>
          <Header.PBattlePass>BATTLE PASS</Header.PBattlePass>
          <Header.SeasonPassP>SEASON LEVEL <span>1</span></Header.SeasonPassP>
          <button onClick={setData}>Button</button>
        </Header.TagsPDiv>
      </Header.TitleDiv>
    </Header.HeaderBoxPassContainer>
  )
}

export default HeaderBoxPass