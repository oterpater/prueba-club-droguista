import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import RegisterForm from '../components/RegisterForm';

import './Pages.css'

function Register() {
  return (
    <div className="page">
      <Header/>
      <div className="content">
        <Aside/>
        <div className="main">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}

export default Register;