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
                    <div className="bg-fondo-btn bordeAcordeon boderAcodeonEsquina">
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Paso 1: Practica la escucha activa .
                      </Accordion.Toggle>
                    </div>

                    <div className="bg-fondo-btn2 boderAcodeonEsquina">
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <p style={{ marginBottom: '0px' }}>
                            Consiste en prestar atención a los detalles para
                            saber por qué el cliente está molesto y comprender
                            la magnitud del problema.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>

                    <div className="bg-fondo-btn bordeAcordeon boderAcodeonEsquina">
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Paso 2: Ponte en el lugar del cliente.
                      </Accordion.Toggle>
                    </div>

                    <div className="bg-fondo-btn2 boderAcodeonEsquina">
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <p style={{ marginBottom: '0px' }}>
                            Consiste en transmitir al cliente que comprende el
                            problema como si estuvieras sucediendo a ti mismo.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>

                    <div className="bg-fondo-btn bordeAcordeon boderAcodeonEsquina">
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Paso 3: Expresa el deseo sincero de ayudar.
                      </Accordion.Toggle>
                    </div>

                    <div className="bg-fondo-btn2 boderAcodeonEsquina">
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <p style={{ marginBottom: '0px' }}>
                            Utiliza expresiones sencillas para que el cliente
                            comprenda que se hace todo lo posible para resolver
                            el problema.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>

                    <div className="bg-fondo-btn bordeAcordeon boderAcodeonEsquina">
                      <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Paso 4: Mantente cortés y amable.
                      </Accordion.Toggle>
                    </div>

                    <div className="bg-fondo-btn2 boderAcodeonEsquina">
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <p style={{ marginBottom: '0px' }}>
                            Sin desconocer el enojo del cliente y sus motivos,
                            para reorientar la conversación y mitigar su mal
                            humor.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>

                    <div className="bg-fondo-btn bordeAcordeon boderAcodeonEsquina">
                      <Accordion.Toggle as={Button} variant="link" eventKey="4" className="">
                      Paso 5: Averigua para que no se preocupe por el cliente.
                      </Accordion.Toggle>
                    </div>

                    <div className="bg-fondo-btn2 boderAcodeonEsquina">
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          <p style={{ marginBottom: '0px' }}>
                            Sin desconocer el enojo del cliente y sus motivos,
                            para reorientar la conversación y mitigar su mal
                            humor.
                          </p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
                 
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
