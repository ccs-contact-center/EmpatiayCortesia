import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

import ReactPlayer from 'react-player'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Empatía y Cortesía</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>¿Por qué es importante la empatía?</h2>
            </Col>
            <Col md="12" className="centrado-fila animated zoomInUp delay-2s">
              <div className=" centrado-fila">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=nYTrIcn4rjg"
                  controls={true}
                />
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-3s">
              <p>
                {' '}
                Empatizar con alguien es simplemente lograr que esa persona se
                sienta comprendida. Si lo consigues, serás capaz de cambiar el
                rumbo de una relación en un instante. El efecto de las neuronas
                espejo provoca que su interlocutor se sienta se sienta en la
                deuda con usted y se pueda entenderlo también se refleje sus
                emociones o los dices que los entiendes lo que se siente, por lo
                que, para los efectos de las relaciones personales con una
                conexión emocional con su cliente y el estará dispuesto a
                cooperar contigo en todo lo que te solicite facilitando asi tu
                trabajo.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
