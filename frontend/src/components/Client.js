import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Client.css'

function Client({ client }) {
  
  return (
    <Card style={{ 
      width: '100%',
      margin: '0 0 30px 0',
      boxShadow: '5px 5px 12px -4px rgba(120,114,120,0.82)'
    }}>
      <Card.Body>
        <Card.Title className="card__title">{client.store}</Card.Title>
        <div className="container__item">
          <Card.Text className="item">Dirección:</Card.Text>
          <Card.Text>{client.address}</Card.Text>
        </div>
        <div className="container__item">
          <Card.Text className="item">Teléfono:</Card.Text>
          <Card.Text>{client.cellphone}</Card.Text>
        </div>
        <div className="container__buttons">
          <Button 
            className="button"
          >
            Editar
          </Button>
          <Button 
            type="submit"
            className="button"
          >
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Client;