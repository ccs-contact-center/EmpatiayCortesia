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
                <b>Cliente metódico</b>
              </h2>
            </Col>
            <Col
              xs="10"
              className="centrado-fila animated bounceInDown delay-1s"
            >
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Características:</b>
                </p>
                <p className="text-justify">
                  Se trata de personas con alta autoestima personal y
                  profesional, que creen conocer todas las características del
                  producto y la empresa.
                  <br />
                  Buscan controlar la situación y la conversación.
                </p>
              </div>
            </Col>
            <Col xs="10" className="mt-3 animated bounceInDown delay-2s">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Manera de atenderle:</b>
                </p>
                <p className="text-justify">
                  Debemos atenderle aportando datos objetivos y hechos probados
                  del producto o servicio que estamos ofreciendo. Escucharlo de
                  forma activa, mostrando interés por sus palabras. Mostrar
                  calma y tranquilidad.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="centrado-fila mt-3 animated bounceInDown delay-3s">
            <Col xs="6" sm="4" md="4" className="centrado-fila">
              <div>
                <p style={{ marginBottom: '0px' }}>
                  <b>Errores a evitar:</b>
                </p>
                <p className="text-justify">
                  Para que la compra finalice con éxito no debemos mostrar
                  nuestra inquietud, ante su indecisión, ni presionarlo para que
                  se decante por el servicio o producto que ofrecemos.
                </p>
              </div>
            </Col>
            <Col xs="6" sm="6" md="4">
              <img
                src={seis}
                style={{ width: 360 }}
                alt="Habilidades.png"
                className="img-fluid bordeImagen animated lightSpeedIn delay-0s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
