import React, { Context, useContext } from "react";
import * as N from './nav'
import { Button } from "../Button";
import { VisibilityProviderValue, VisibilityCtx } from "../../providers/VisibilityProvider";

const Nav: React.FC = () => {
  const { handleToogle, showBattlePass } = useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>)
  return (
    <N.Nav>
      <Button name='Play' onclick={handleToogle}/>
      <Button name='Server Pass' onclick={showBattlePass}/>
      <Button name='Complete'/>
      <Button name='Locker'/>
      <Button name='Item Shop'/>
      <Button name='Carrer'/>
      <Button name='Gems'/>
    </N.Nav>
  );
};

export default Nav;
