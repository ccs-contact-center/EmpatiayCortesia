import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactPlayer from 'react-player'
import cierre01 from '../../assets/img/ImgClientesDificiles/cierre01.mp4'

class PresentacionView extends Component {
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
          <Row>
            <Col
              xs="12"
              className="centrado-fila animated  fadeInDown  delay-1s"
            >
              <h2 className="animated  infinite delay-0s">
                <b>Conclusión</b>
              </h2>
            </Col>
            <Col xs="12" className="centrado-fila">
              <div
                style={{ maxWidth: '800px' }}
                className="cajaA2 bg-fondo-btn2 animated  fadeInUp  delay-2s"
              >
                <p className="text-justify animated  fadeInDown  delay-3s ">
                Esta variabilidad es la que obligaría a las empresas a crear productos y servicios con tantas modificaciones como personas hay, algo objetivamente imposible. Ello, nos lleva a la necesidad de conjugar dicha diferenciación con las posibilidades reales de atención al cliente y para ello, una de las soluciones encontrada es la de agrupar a los clientes, según una serie de criterios comunes.
Se trata de establecer distintas tipologías de clientes con unas motivaciones y actitudes similares, aunque sea a grandes rasgos.
                </p>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila mt-4 animated  fadeInDown  delay-5s">
              <ReactPlayer url={cierre01} controls={true} />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default PresentacionView
