import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import swal from "sweetalert"
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()
//import SweetAlert from 'sweetalert2-react'

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      pregunta1: '',
      pregunta2: '',
      pregunta3: '',
      pregunta4: '',
      pregunta5: '',
      pregunta6: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'EmpatiaCortesia',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });
      
      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                De acuerdo al tipo de cliente, llena el paréntesis de la
                recomendación de manera de atenderle.
              </p>
              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>1.- ¿Qué es la empatía?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta1"
                          id="pregunta1"
                          placeholder="Tu respuesta"
                          value={this.state.pregunta1}
                          onChange={this.onChange.bind(this)}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>2.- ¿Cuales son las tipos de empatia que existen?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta2"
                          id="pregunta2"
                          placeholder="Tu respuesta"
                          onChange={this.onChange.bind(this)}
                          value={this.state.pregunta2}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>3.- ¿Por que es importante ser empáticos?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta3"
                          id="pregunta3"
                          placeholder="Tu respuesta"
                          onChange={this.onChange.bind(this)}
                          value={this.state.pregunta3}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        4.- ¿Cuales son los rasgos mas importantes de una
                        persona empatica?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta4"
                          id="pregunta4"
                          placeholder="Tu respuesta"
                          onChange={this.onChange.bind(this)}
                          value={this.state.pregunta4}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        5.- Menciona tres acciones con las cuáles puedes mejorar
                        tu empatía.
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta5"
                          id="pregunta5"
                          placeholder="Tu respuesta"
                          onChange={this.onChange.bind(this)}
                          value={this.state.pregunta5}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label ml-2">
                      <b>
                        6.- ¿Cuales son los 3 obstaculos mas frecuentes en la
                        empatia?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <Col sm={12}>
                      <FormGroup check>
                        <Input
                          type="text"
                          name="pregunta6"
                          id="pregunta6"
                          placeholder="Tu respuesta"
                          onChange={this.onChange.bind(this)}
                          value={this.state.pregunta6}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </div>

                {/* <p>{JSON.stringify(this.state)}</p> */}

                <br />

                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button color="primary" onClick={this.onSave.bind(this)}>
                      Enviar
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
