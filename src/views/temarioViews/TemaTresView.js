import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import ReactPlayer from 'react-player'
import dos from '../../assets/img/ImgEmpatia/dos.png'

class TemaTresView extends Component {
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
              <h2>Pero ... ¿De dónde viene y cómo se genera la empatía?</h2>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <p>
                ¿La empatia es solo una actitud o es también una reacción
                fisiológica de nuestro cuerpo? ¿Tú que crees? ¿Alguna vez ha
                escuchado hablar de las neuronas espejo? Veamos el siguiente
                video.
              </p>
            </Col>
            <Col md="12" className="centrado-fila animated zoomInUp delay-3s">
              <div className=" centrado-fila">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=o4PHuVCzeGY&feature=emb_logo"
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
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <img
                src={dos}
                style={{ width: 360 }}
                alt="dos"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
