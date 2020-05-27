import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

import consejos01 from '../../assets/img/ImgClientesDificiles/consejos01.jpg'

class TemaCuatroView extends Component {
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
                <b>Cliente amistoso:</b>
              </h2>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row>
                <Col xs="8">
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Características:</b>
                    </p>
                    <p className="text-justify">
                      Tienden a mostrarse receptivo y pacífico. Al conversar con
                      él nos da la razón con frecuencia. Tiende a mostrar cierta
                      indecisión a la hora de realizar la compra.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Manera de atenderle:</b>
                    </p>
                    <p className="text-justify">
                      Si la decisión se alarga mucho, realizar un resumen de los
                      aspectos sobre los cuales hay acuerdo. Se debe hacer
                      hincapié sobre una oferta concreta, y forzar el acuerdo
                      cuando se perciben señales de que es posible.
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '0px' }}>
                      <b>Errores a evitar:</b>
                    </p>
                    <p className="text-justify">
                      No debemos confiarnos demasiado, ya que si se tarda
                      demasiado en cerrar la compra pueden que decidan no
                      realizarla en ese momento debido a su tendencia a la
                      indecisión.
                    </p>
                  </div>
                </Col>
                <Col xs="4" className="centrado-fila">
                  <img
                    src={consejos01}
                    style={{ width: 350 }}
                    alt="escucha-activa.jpg"
                    className="img-fluid bordeImagen  animated fadeInUpBig delay-2s  "
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
export default TemaCuatroView
