import React, {Context, createContext, useContext, useEffect, useState} from "react";
import {useNuiEvent} from "../hooks/useNuiEvent";
import {fetchNui} from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

export const VisibilityCtx = createContext<VisibilityProviderValue | null>(null)

interface DataPlayer {
  armour: number,
  experience: number,
  health: number,
  hunger: number,
  inventory: [],
  oxigen: number,
  perm: { perm: boolean },
  position: { x: number, y: number, z: number }
  skin: number,
  stress: number,
  thirst: number,
  weight: number,
}

export interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void
  visible: boolean
  sBattlePass: boolean
  dataPlayer: DataPlayer
  showBattlePass: () => void
  handleToogle: () => void
}

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const data: DataPlayer = {
    armour: 0,
    experience: 0,
    health: 0,
    hunger: 0,
    inventory: [],
    oxigen: 0,
    perm: { perm: false },
    position: { x: 0, y: 0, z: 0 },
    skin: 0,
    stress: 0,
    thirst: 0,
    weight: 0,
  };

  const [visible, setVisible] = useState(false)
  const [sBattlePass, setSBattlePass] = useState(false)
  const [dataPlayer, setDataPlayer] = useState<DataPlayer>(data)

  const handleToogle = () => {
    fetchNui('hideFrame').then((sucesso) => console.log(sucesso))
  }
  const showBattlePass = () => {
    setSBattlePass(!sBattlePass)
  }
  
  useNuiEvent<boolean>('setVisible', setVisible)

  // Handle pressing escape/backspace
  useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Backspace", "Escape"].includes(e.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    }

    const setData = async () => {
      fetchNui("getClientData").then( ({ data }) => {
        return setDataPlayer(data);
      })
    }
    setData()

    window.addEventListener("keydown", keyHandler)

    return () => window.removeEventListener("keydown", keyHandler)
  }, [visible])

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        sBattlePass,
        dataPlayer,
        showBattlePass,
        setVisible,
        handleToogle
      }}
    >
    <div style={{ visibility: visible ? 'visible' : 'hidden', height: '100%'}}>
      {children}
    </div>
  </VisibilityCtx.Provider>)
}

export const useVisibility = () => useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
