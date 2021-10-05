import React from 'react'
import { Form, Button, Row, Col, Table, Nav , Navbar , Container } from "react-bootstrap"
import swal from 'sweetalert'

const Editar = ({ ventaElegida }) => {

    const editarVentaExitosa = () => {
        swal({
            title: "Editar venta",
            text: "¿Estas seguro que quieres editar esta venta?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then(respuesta => {
            if (respuesta) {
                swal({ text: "La venta se ha editado con exito", icon: "success" })
            } else {
                swal({ text: "La venta no se ha podido editar", icon: "error" })
            }
        })
    }

    return (
        <div className="contenedor">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h4> (Editar) Detalles de facturación</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav align="left">
                            <Button variant="secondary" type="button">Volver</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Form.Text className="text-muted">
                Los campos marcados con (*) son obligatorios.
            </Form.Text>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">ID Venta</Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={ventaElegida.idVenta} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Tipo DNI*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.tipoDNI} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">DNI*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.DNIcliente} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Nombre Cliente*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.nombre} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Correo electrónico*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.correo} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Telefono*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.telefono} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Dirección*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.direccion} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Ciudad*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder={ventaElegida.ciudad} />
                    </Col>
                </Form.Group>

                <hr />
                <h4> (Editar) Productos de la venta</h4>
                <hr />
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Valor Unitario</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Control type="name" placeholder="Chaqueta" /></td>
                                <td><Form.Control type="name" placeholder="1" /></td>
                                <td><Form.Control type="name" placeholder="$ 85.000" /></td>
                                <td><Form.Control type="name" placeholder="$ 85.000" /></td>
                            </tr>
                            <tr>
                                <td><Form.Control type="name" placeholder="Camisa" /></td>
                                <td><Form.Control type="name" placeholder="3" /></td>
                                <td><Form.Control type="name" placeholder="$ 25.000" /></td>
                                <td><Form.Control type="name" placeholder="$ 75.000" /></td>
                            </tr>
                            <tr>
                                <td><Form.Control type="name" placeholder="Jean" /></td>
                                <td><Form.Control type="name" placeholder="2" /></td>
                                <td><Form.Control type="name" placeholder="$ 95.000" /></td>
                                <td><Form.Control type="name" placeholder="$ 190.000" /></td>
                            </tr>
                            <tr>
                                <th colSpan="3">TOTAL FACTURA</th>
                                <td><Form.Control type="name" placeholder="$ 350.000" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Button onClick={() => editarVentaExitosa()} variant="primary" type="button">Guardar Cambios</Button>
                <hr />
            </Form>
        </div>
    )
}

export default Editar
