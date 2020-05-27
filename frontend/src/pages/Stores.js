import React from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Aside from '../components/Aside';
import Clients from '../components/Clients';
import './Pages.css'

class Stores extends React.Component {
  state = {
    stores: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:3000',
        url: '/client'
      })
      this.setState({ stores: data });
    } catch (error) {
      this.setState({ error: 'Algo salió mal'});
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { stores, error } = this.state;
    if(error) return <p>Algo salió mal!</p>;

    return (
      <div className="page">
        <Header/>
        <div className="content">
          <Aside/>
          <div className="main">
            <Clients clients={stores}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Stores;