import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import cinco from '../../assets/img/ImgClientesDificiles/cinco.png'

class TemaCincoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles </h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>Cliente Orgulloso:</b>
              </h2>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row className="centrado-fila">
                <Col xs="8">
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Características:</b>
                    </p>
                    <p className="text-justify">
                      Se trata de personas con alta autoestima personal y
                      profesional, que creen conocer todas las características
                      del producto y la empresa. Buscan controlar la situación y
                      la conversación.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Manera de atenderle:</b>
                    </p>
                    <p className="text-justify">
                      Debemos atenderle aportando datos objetivos y hechos
                      probados del producto o servicio que estamos ofreciendo.
                      Escucharlo de forma activa, mostrando interés por sus
                      palabras. Mostrar calma y tranquilidad.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Errores a evitar:</b>
                    </p>
                    <p className="text-justify">
                      Resulta inútil tratar de demostrarle que está en un error.
                      Tampoco debemos manifestar impaciencia o debilidad, ni
                      interrumpir bruscamente la conversación, pues se sentirá
                      ofendido.
                    </p>
                  </div>
                </Col>
                <Col xs="4" className="centrado-fila">
                  <img
                    src={cinco}
                    style={{ width: 350 }}
                    alt="escucha-activa.jpg"
                    className="img-fluid bordeImagen  animated fadeInUpBig delay-1s  "
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
export default TemaCincoView
