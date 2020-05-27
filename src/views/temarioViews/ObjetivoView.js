import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Objetivo from '../../assets/img/ImgEmpatia/objetivo.png'
import ReactPlayer from 'react-player'

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="5" lg="5">
              <div className="align-middle animated  fadeInDown  delay-0s">
                <p className="text-justify globoAbajo">
                  ¿Que tal? ¿Cómo estás? Que gusto volverte a ver por aquí, el
                  día de ayer hoy tengo preparado para ti el curso de empatía y
                  cortesía el cual es vital para tu día a día. ¡Veamos el
                  siguiente video!
                </p>
              </div>
            </Col>
            <Col xs="12" sm="12" className="centrado-fila">
              <img
                src={Objetivo}
                style={{ width: 160 }}
                alt="Objetivo"
                className="img-fluid  animated  fadeInDown  delay-1s"
              />
            </Col>
            <Col
              xs="12"
              className="centrado-fila mt-4 animated  fadeInDown  delay-2s"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=UB3nKCNUBB4"
                controls={true}
              />
            </Col>
            <Col xs="12" sm="12" className="mt-4 text-center">
              <h3 className="animated  fadeInDown  delay-3s">
                <b>¡COMENCEMOS!</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
