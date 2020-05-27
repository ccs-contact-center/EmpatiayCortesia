import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import tres from '../../assets/img/ImgClientesDificiles/tres.jpg'
class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Clientes Difíciles</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="4" className="">
              <h2
                style={{ marginBottom: '0px' }}
                className="text-center animated fadeInUpBig delay-0s"
              >
                <b>Clientes silenciosos</b>
              </h2>
              <br />
              <p className="animated fadeInUpBig delay-1s">
                <b>Características:</b>
                <p className="">
                  Se trata de clientes que hablan poco pero son buenos
                  escuchando.
                </p>
              </p>
              <p
                className="animated fadeInUpBig delay-2s"
                style={{ marginBottom: '0px' }}
              >
                <b>Manera de atenderle:</b>
                <p className="">
                  Ante este tipo de clientes debemos mostrar amabilidad e
                  interés por sus necesidades a fin de buscar una respuesta,
                  haciéndole alguna pregunta para ello. Podemos utilizar
                  catálogos o muestras para hacerle participar dando su opinión.
                </p>
              </p>

              <p
                className="animated fadeInUpBig delay-3s"
                style={{ marginBottom: '0px' }}
              >
                <b>Errores a evitar:</b>
                <p className="">
                  Nunca elevar la voz aun si no nos contesta, porque pensemos
                  que no nos escucha. Evitar los silencios prolongados.
                </p>
              </p>
            </Col>

            <Col xs="4" className="centrado-fila">
              <img
                src={tres}
                style={{ width: 200 }}
                alt="escucha-activa.jpg"
                className="img-fluid  animated fadeInUpBig delay-2s  "
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
