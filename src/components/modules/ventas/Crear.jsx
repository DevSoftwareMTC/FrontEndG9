import React from 'react'
import { Form, Button, Row, Col, Table } from "react-bootstrap"
import swal from 'sweetalert'

const Crear = () => {

    const crearVentaExitosa=()=>{
        swal({
            title: "Registro de venta",
            text: "EXITOSA",
            icon: "success",
            button: "Aceptar"
        })
    }

    return (
        <div className="contenedor">
            <hr />
            <h4>Detalles de facturación</h4>
            <hr />

            <Form.Text className="text-muted">
                Los campos marcados con (*) son obligatorios.
            </Form.Text>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">ID Venta</Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="0001" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Tipo DNI*</Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="Default select example">
                            <option>Seleccione el tipo de documento</option>
                            <option value="1">TI - Tarjeta de Identidad</option>
                            <option value="2">CC - Cédula de Ciudadania</option>
                            <option value="3">CE - Cédula de Extranjeria</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Nombre Cliente*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Ingrese nombre del cliente" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Correo electrónico*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Ingrese el correo electrónico" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Telefono*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Ingrese el telefono" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Dirección*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Ingrese la dirección" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Ciudad*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Ingrese la ciudad" />
                    </Col>
                </Form.Group>

                <hr />
                <h4>Productos de la venta</h4>
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
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Tipo de prenda</option>
                                        <option value="1">Camisa</option>
                                        <option value="2">Jean</option>
                                        <option value="3">Bermuda</option>
                                        <option value="4">Chaqueta</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Select>
                                </td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Tipo de prenda</option>
                                        <option value="1">Camisa</option>
                                        <option value="2">Jean</option>
                                        <option value="3">Bermuda</option>
                                        <option value="4">Chaqueta</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Select>
                                </td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Tipo de prenda</option>
                                        <option value="1">Camisa</option>
                                        <option value="2">Jean</option>
                                        <option value="3">Bermuda</option>
                                        <option value="4">Chaqueta</option>
                                    </Form.Select>
                                </td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Select>
                                </td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                                <td><Form.Control type="name" placeholder="$" /></td>
                            </tr>
                            <tr>
                                <th colSpan="3">TOTAL FACTURA</th>
                                <td><Form.Control type="name" placeholder="$" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Button onClick={()=>crearVentaExitosa()} variant="primary" type="button">Registrar Venta</Button>
                <hr />
            </Form>
        </div>
    )
}

export default Crear
