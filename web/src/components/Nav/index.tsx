import React from "react";
import * as N from './nav'
import { Button } from "../Button";

const Nav: React.FC = () => {
  return (
    <N.Nav>
      <Button name='Play'/>
      <Button name='Server Pass'/>
      <Button name='Complete'/>
      <Button name='Locker'/>
      <Button name='Item Shop'/>
      <Button name='Carrer'/>
      <Button name='Gems'/>
    </N.Nav>
  );
};

export default Nav;
