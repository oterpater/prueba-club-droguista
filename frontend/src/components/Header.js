import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Header.css';

function Header() {
  return(
    <div className="header">
      <p className="subtitle">CLUB EL DROGUISTA</p>
      <p className="title">MAPA DE DROGUERÍAS</p>
    </div>
  );
}

export default Header;