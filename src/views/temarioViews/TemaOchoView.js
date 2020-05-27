import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import definiciones01 from '../../assets/img/ImgClientesDificiles/definiciones01.jpg'

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
            <Col xs="12" className="animated bounceInLeft">
              <h2>
                <b>Algunos consejos que puedes aplicar</b>
              </h2>
            </Col>
            <Col xs="12" sm="6" md="4" className="mt-4 mb-4">
              <ol style={{ marginBottom: '0px' }}>
                <li>Lo primero y más importante: escúchales.</li>
                <li>Muestra empatía.</li>
                <li>Baja tu tono de voz y habla despacio.</li>
                <li>No te lo tomes como algo personal.</li>
              </ol>
            </Col>
            <Col xs="12" sm="6" md="4" className="centrado-fila">
              <img
                src={definiciones01}
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
