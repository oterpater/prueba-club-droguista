import React from 'react';
import { Link } from 'react-router-dom'

import './Aside.css'

function Aside() {
  return(
    <div className="aside">
      <div className="link">
        <Link to="/">
          <p className="link__text">Registrar droguería</p>
        </Link>
      </div>
      <span className="span"></span>
      <div className="link">
        <Link to="/stores">
        <p className="link__text">Droguerías</p>
        </Link>
      </div>
      <span className="span"></span>
      <div className="link">
        <Link to="/map">
          <p className="link__text">Mapa</p>
        </Link>
      </div>
      <span className="span"></span>
    </div>
  );
}

export default Aside;