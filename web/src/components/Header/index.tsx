import React, { Context, useContext, useState } from 'react'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider'
import * as Hd from './header'
import Nav from '../Nav/Nav'

const Header: React.FC =() => {

  const [clientData, setClientData] = useState(Boolean)
  const { visible } = useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)

  return (
    <Hd.HeaderContainer>
      <Nav />
    </Hd.HeaderContainer>
  )
}

export default Header