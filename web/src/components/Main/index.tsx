import React, { Context, useContext, useState } from 'react'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider'
import Header from '../Header'
import Boxpass from '../BoxPass'
import * as M from './main'

const Main: React.FC =() => {

  return (
    <M.Main>
      <Header />
      <Boxpass />
    </M.Main>
  )
}

export default Main