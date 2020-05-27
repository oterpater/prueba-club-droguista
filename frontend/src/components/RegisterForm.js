import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function FormSignUp({ navigation }){
  const [store, setStore] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [firstLastName, setFirstLastName] = React.useState('');
  const [secondLastName, setSecondLastName] = React.useState('');
  const [identificationType, setIdentificationType] = React.useState('');
  const [identification, setIdentification] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [city, setCity] = React.useState('');
  const [neighborhood, setNeighborhood] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [address3, setAddress3] = React.useState('');
  const [address4, setAddress4] = React.useState('');
  const [address5, setAddress5] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [telephone, setTelephone] = React.useState();
  const [cellphone, setCellphone] = React.useState();
  const [stratum, setStratum] = React.useState();

  // const createNewUser = () => {
  //   const address = address1.concat(address2, address3, address4, address5);
  //   identificationType

  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/client',
  //     data: {
  //       store: store,
  //       firstName: firstName,
  //       secondName: secondName,
  //       firstLastName: firstLastName,
  //       secondLastName: secondLastName,
  //       identificationType: identificationType,
  //       identification: identification,
  //       email: email,
  //       department: department,
  //       city: city,
  //       neighborhood: neighborhood,
  //       address: address,
  //       birthday: birthday,
  //       telephone: telephone,
  //       cellphone: cellphone,
  //       stratum: stratum
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // };

  return (
    <Form>
      <Form.Group controlId="store">
        <Form.Label>Nombre del establecimiento:</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <div className="row">
        <Form.Group controlId="firstName">
          <Form.Label>Primer nombre:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="secondName">
          <Form.Label>Segundo nombre:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </div>
      <div className="row">
        <Form.Group controlId="firstLastName">
          <Form.Label>Primer apellido:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="secondLastName">
          <Form.Label>Segundo apellido:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </div>
      <div className="row">
        <Form.Group controlId="identificationType">
          <Form.Label>Tipo de documento:</Form.Label>
          <Form.Control as="select">
            <option>Cédula de ciudadanía</option>
            <option>Cédula de extranjería</option>
            <option>Pasaporte</option>
            <option>NIT</option>
            <option>Tarjeta de identidad</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="identification">
          <Form.Label>Número de indentificación:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </div>
      <div className="row">
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group controlId="department">
          <Form.Label>Departamento:</Form.Label>
          <Form.Control as="select">
            <option>Bogotá D.C.</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div className="row">
        <Form.Group controlId="city">
          <Form.Label>Ciudad:</Form.Label>
          <Form.Control as="select">
            <option>Bogotá D.C.</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="neighborhood">
          <Form.Label>Barrio:</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </div>
      <div className="row">
        <Form.Group controlId="address">
          <Form.Label>Dirección:</Form.Label>
          <Form.Control as="select">
            <option>Bogotá D.C.</option>
          </Form.Control>
          <Form.Control type="text"/>
        </Form.Group>
      </div>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormSignUp;

























