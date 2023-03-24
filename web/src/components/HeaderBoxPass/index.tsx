import React from 'react'
import * as Header from './HeaderBoxPass'
import battlepassimg from '../../imgs/battlepass.png';

const HeaderBoxPass: React.FC = () => {
  return (
    <Header.HeaderBoxPassContainer>
      <Header.TitleDiv>
        <img src={battlepassimg} alt="battle pass"/>
        <Header.TagsPDiv>
          <Header.PBattlePass>BATTLE PASS</Header.PBattlePass>
          <Header.SeasonPassP>SEASON LEVEL <span>1</span></Header.SeasonPassP>
        </Header.TagsPDiv>
      </Header.TitleDiv>
    </Header.HeaderBoxPassContainer>
  )
}

export default HeaderBoxPass