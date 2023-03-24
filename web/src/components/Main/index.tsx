import React, { Context, useContext, useState } from 'react'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider'
import Header from '../Header/Header'
import './main.css'

const Main: React.FC =() => {

  return (
    <main className='main'>
      <Header />
    </main>
  )
}

export default Main