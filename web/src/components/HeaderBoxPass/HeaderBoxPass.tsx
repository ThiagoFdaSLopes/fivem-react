import React from 'react'
import './HeaderBoxPass.css'
import battlepassimg from '../../imgs/battlepass.png';

const HeaderBoxPass: React.FC = () => {
  return (
    <div className='HeaderBoxPass'>
      <img src={battlepassimg} alt="battle pass"/>
      <div className='title'>
        <p className='pBattePass'>BATTLE PASS</p>
        <p className='seasonPass'>SEASON LEVEL <span>1</span></p>
      </div>
    </div>
  )
}

export default HeaderBoxPass