import React from "react";
import './nav.css'
import { Button } from "../Button/Button";

const Nav: React.FC = () => {
  return (
    <nav className="menu-bar">
      <Button name='Play'/>
      <Button name='Server Pass'/>
      <Button name='Complete'/>
      <Button name='Locker'/>
      <Button name='Item Shop'/>
      <Button name='Carrer'/>
      <Button name='Gems'/>
    </nav>
  );
};

export default Nav;
