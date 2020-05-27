import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

import ReactPlayer from 'react-player'
import atc01 from '../../assets/img/ImgClientesDificiles/atc01.mp4'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Tipos de clientes</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12">

            <h2><b>Tipos de clientes</b></h2>
            </Col>

            <Col md="12" className="centrado-fila">
              <div className=" centrado-fila" >
              <ReactPlayer url={atc01}   controls={true} />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
