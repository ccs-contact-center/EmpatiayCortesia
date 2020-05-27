import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import seis from '../../assets/img/ImgClientesDificiles/seis.jpg'

class TemaSeisView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles </h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated bounceInDown">
                <b>Cliente Entusiasta</b>
              </h2>
            </Col>
            <Col
              xs="12"
              className="centrado-fila animated bounceInDown delay-1s"
            >
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Características:</b>
                </p>
                <p className="text-justify">
                  Este tipo de cliente disfruta de la conversación, en ocasiones
                  relata historias de carácter personal.
                  <br />
                  Pasa de un tema a otro olvidándose de la propia compra. Tiende
                  a ser repetitivo en sus argumentaciones y no escuchar a los
                  demás. Pese a ello suele interesarle la opinión de los
                  dependientes.
                </p>
              </div>
            </Col>
            <Col xs="12" className="mt-3 animated bounceInDown delay-2s">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Manera de atenderle:</b>
                </p>
                <p className="text-justify">
                  Debemos tratar de volver la conversación hacia la venta si nos
                  desviamos de ella. Es conveniente ser breve en la exposición,
                  presentando los puntos centrales del producto o servicio.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-3 animated bounceInDown delay-3s">
            <Col xs="12" sm="12" md="12" className="centrado-fila">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Errores a evitar:</b>
                </p>
                <p className="text-justify">
                  No debemos mostrar cansancio ni aburrimiento, tampoco romper
                  su entusiasmo, o entrar en conversaciones o discusiones
                  personales sobre asuntos personales del cliente.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" md="12" className="centrado-fila">
              <img
                src={seis}
                style={{ width: 360 }}
                alt="Habilidades.png"
                className="img-fluid  animated lightSpeedIn delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
