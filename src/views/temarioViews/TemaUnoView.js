import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Objetivo from '../../assets/img/ImgClientesDificiles/objetivo.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>¿Qué es un cliente dificil?</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated zoomInUp delay-1s">
                <b>¿Qué es un cliente dificil?</b>
              </h2>
            </Col>
            <Col xs="12">
              <Row className="">
                <Col md="4" className="animated zoomInUp delay-2s">
                  <p style={{ marginBottom: '0px' }}>
                    <b>Cliente:</b>
                  </p>
                  <p className="text-justify">
                    Persona que utiliza los servicios de un profesional o de una
                    empresa, especialmente la que lo hace regularmente.Cliente:
                    Persona que utiliza los servicios de un profesional o de una
                    empresa, especialmente la que lo hace regularmente.
                  </p>
                </Col>
                <Col md="4" className="animated zoomInUp delay-3s">
                  <p style={{ marginBottom: '0px' }}>
                    <b>Difícil:</b>
                  </p>
                  <p className="text-justify">
                    Que, por su carácter nervioso, disconforme, rebelde, etc.,
                    debe ser tratado con habilidad, inteligencia y esfuerzo.
                  </p>
                </Col>
                <Col md="4" className="centrado-fila">
                  <img
                    src={Objetivo}
                    style={{ width: 360 }}
                    alt="Objetivo"
                    className="img-fluid bordeImagen animated zoomInUp delay-4s"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
