import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';

import './Pages.css'

function Register() {
  return (
    <div className="page">
      <Header/>
      <div className="content">
        <Aside/>
        <div className="main">
        </div>
      </div>
    </div>
  );
}

export default Register;