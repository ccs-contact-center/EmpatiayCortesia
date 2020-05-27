import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
//import SweetAlert from 'sweetalert2-react'
import Actividad1 from './componentsExtras/dragdrog'

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
              De acuerdo al tipo de cliente, llena el paréntesis de la recomendación de manera de atenderle. 

              </p>
              <Actividad1 />
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
