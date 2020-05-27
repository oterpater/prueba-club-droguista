import React from 'react';
import axios from 'axios';
import { Form, Button, Col, Row } from 'react-bootstrap';
import './RegisterForm.css';

class FormSignUp extends React.Component {
  state = {
    store: '',
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    identificationType: '',
    identification: '',
    email: '',
    department: '',
    city: '',
    neighborhood: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    address5: '',
    birthday: '',
    telephone: '',
    cellphone: '',
    stratum: '',
  };

  handleChange = e => {
    const { value, id } = e.target;

    this.setState({
      [id]: value
    });
  };
 
  async handleSubmit(event) {
    event.preventDefault();
    try{
    const address = this.state.address1 + " " + this.state.address2 + " " + this.state.address3 + " " + this.state.address4 + " " + this.state.address5;
    const data = {
      store: this.state.store,
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      firstLastName: this.firstLastName,
      secondLastName: this.state.secondLastName,
      identificationType: this.state.identificationType,
      identification: this.state.identification,
      email: this.state.email,
      department: this.state.department,
      city: this.state.city,
      neighborhood: this.state.neighborhood,
      address: address,
      birthday: this.state.birthday,
      telephone: this.state.telephone,
      cellphone: this.state.cellphone,
      stratum: this.state.stratum
    };
    await axios.post('http://localhost:3000/client', { data } )
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="form">
        <Form>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Nombre del establecimiento:</Form.Label>
              <Form.Control 
                type="text"
                id="store"
                value={this.state.store}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Primer nombre:</Form.Label>
              <Form.Control 
                type="text"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Segundo nombre:</Form.Label>
              <Form.Control 
                type="text"
                id="secondName"
                value={this.state.secondName}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Primer apellido:</Form.Label>
              <Form.Control 
                type="text"
                id="firstLastName"
                value={this.state.firstLastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Segundo apellido:</Form.Label>
              <Form.Control 
                type="text"
                id="secondLastName"
                value={this.state.secondLastName}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Tipo de documento:</Form.Label>
              <Form.Control 
                as="select"
                id="identificationType"
                onChange={this.handleChange}
              >
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PASSPORT">Pasaporte</option>
                <option value="NIT">NIT</option>
                <option value="TI">Tarjeta de identidad</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Número de indentificación:</Form.Label>
              <Form.Control 
                type="text"
                id="identification"
                value={this.state.identification}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Departamento:</Form.Label>
              <Form.Control 
                as="select"
                id="department"
                onChange={this.handleChange}
              >
                <option value="Bogotá D.C.">Bogotá D.C.</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="group">
              <Form.Label>Ciudad:</Form.Label>
              <Form.Control 
                as="select"
                id="city"
                onChange={this.handleChange}
              >
                <option value="Bogotá D.C.">Bogotá D.C.</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Barrio:</Form.Label>
              <Form.Control 
                type="text"
                id="neighborhood"
                value={this.state.neighborhood}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group>
              <Form.Label>Dirección:</Form.Label>
              <Row>
                <Col>
                  <Form.Control 
                    as="select"
                    id="address1"
                    onChange={this.handleChange}
                  >
                    <option value="Autopista">Autopista</option>
                    <option value="Avenida">Avenida</option>
                    <option value="Calle">Calle</option>
                    <option value="Carrera">Carrera</option>
                    <option value="Circunvalar">Circunvalar</option>
                    <option value="Variante">Variante</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control 
                    type="text"
                    id="address2"
                    value={this.state.address2}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Text>#</Form.Text>
                </Col>
                <Col>
                  <Form.Control 
                    type="text"
                    id="address3"
                    value={this.state.address3}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Text>-</Form.Text>
                </Col>
                <Col>
                  <Form.Control 
                    type="text"
                    id="address4"
                    value={this.state.address4}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <Form.Control 
                    type="text"
                    id="address5"
                    value={this.state.address5}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className="group">
              <Form.Label>Fecha de nacimiento:</Form.Label>
              <Form.Control 
                type="date"
                id="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control 
                type="number"
                id="telephone"
                value={this.state.telephone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group className="group">
              <Form.Label>Celular:</Form.Label>
              <Form.Control 
                type="number"
                id="cellphone"
                value={this.state.cellphone}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group>
              <Form.Label>Estrato:</Form.Label>
              <Form.Control 
                as="select"
                id="stratum"
                onChange={this.handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Form.Control>
            </Form.Group>
          </div>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Acepto términos y condiciones" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Al dar clic acá autorizo que mi información personal sea usada para fines comerciales, como compra y venta de producto. Reconozco y acepto la política de datos personales de la Empresa que declaro conocer y haber leído en este link." />
          </Form.Group>

          <div className="container__buttons">
            <Button 
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default FormSignUp;

























