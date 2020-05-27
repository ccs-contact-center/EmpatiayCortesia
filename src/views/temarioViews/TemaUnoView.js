import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'


class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Empatía y Cortesía</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated zoomInUp delay-1s">
                <b>¿Qué es la empatía?</b>
              </h2>
            </Col>
            <Col md="12" className="animated zoomInUp delay-2s">
              <p className="text-justify">
                Todas las personas tienen valores que les ayudan a orientar sus
                vidas. Los valores son muy importantes en la vida de las
                personas y en el comportamiento de las personas; Orientan la
                vida y marcan la personalidad.
              </p>
              <p className="text-justify">
                La empatía nos permite establecer vínculos más sólidos y
                positivos con los demás. Se define como la capacidad para
                reconocer y comprender los sentimientos, ideas, conductas y
                actitudes de los demás y entender las circunstancias que pueden
                afectar a situaciones concretas.
              </p>
              <p className="text-justify">
                Una diferencia de lo que se cree popularmente, la empatía no es
                la capacidad de sentir lo que el otro siente. Si fuera así
                estaríamos sufriendo altibajos emocionales durante todo el día.
                <b>La empatía es lo que otro individuo siente y responde en
                función</b>.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
