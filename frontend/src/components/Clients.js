import React from 'react';
import Client from './Client';

function Clients({ clients }) {
  return (
    <div className="clients">
      {clients && clients.length > 0 && clients.map(client => {
        return <Client key={client.id} client={client}/>;
      })}
    </div>
  )
}

export default Clients;