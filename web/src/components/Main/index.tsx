import React, { Context, useContext, useState } from 'react'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider'
import Header from '../Header/Header'
import Boxpass from '../BoxPass/Boxpass'
import './main.css'

const Main: React.FC =() => {

  return (
    <main className='main'>
      <Header />
      <Boxpass />
    </main>
  )
}

export default Main