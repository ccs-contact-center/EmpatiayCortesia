import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactPlayer from 'react-player'
import cinco from '../../assets/img/ImgEmpatia/cinco.jpg'
import { Card, Button } from 'react-bootstrap'

import Accordion from 'react-bootstrap/Accordion'

class TemaCincoView extends Component {
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
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown delay-0s">
                <b>Mejorando tu empatía</b>
              </h2>
              <p className="animated fadeInDown delay-1s">
                Podemos relizar mejoras a nuestra empatia, dale un vistazo al
                siguiente enlace:
              </p>

              <div className="centrado-fila">
                <ReactPlayer
                  className="animated fadeInDown delay-2s mt-4"
                  url="https://www.youtube.com/watch?v=3DEzlUbkFg8&feature=emb_logo"
                  controls={true}
                />
              </div>
            </Col>
            <Col xs="12" className="  animated fadeInDown">
              <Row className="centrado-fila mt-4">
                <Col xs="8">
                  <Accordion>
                    <div>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </div>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>

                    <div>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                      </Accordion.Toggle>
                    </div>

                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
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
