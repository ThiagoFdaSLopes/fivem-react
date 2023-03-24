import React, { Context, useContext, useState } from 'react'
import { VisibilityCtx, VisibilityProviderValue } from '../../providers/VisibilityProvider'
import './header.css'
import { fetchNui } from '../../utils/fetchNui'
import { useNuiEvent } from '../../hooks/useNuiEvent'
import Nav from '../Nav/Nav'

const Header: React.FC =() => {

  const [clientData, setClientData] = useState(Boolean)
  const { visible } = useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)

  return (
    <header className='header'>
      <Nav />
    </header>
  )
}

export default Header