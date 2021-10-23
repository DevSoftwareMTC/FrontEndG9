import React, { useState } from 'react'
import { Form, Button, Row, Col, Table } from "react-bootstrap"
import swal from 'sweetalert'
import { createSale } from './service'

const Crear = ({ methodBack, sales }) => {
    const [tipoDNI, setTipoDNI] = useState("CC")
    const [DNI, setDNI] = useState("")
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ciudad, setCiudad] = useState("")

    const crearVentaExitosa = (event) => {
        event.preventDefault();
        const sale = {
            typeDni: tipoDNI,
            dni: DNI,
            name: nombre,
            email: correo,
            tel: telefono,
            address: direccion,
            city: ciudad
        }
        console.log(sale);
        createSale(sale);

        swal({
            title: "Registro de venta",
            text: "EXITOSA",
            icon: "success",
            button: "Aceptar"
        })
        methodBack(true)
    }

    return (
        <div className="contenedor">
            <hr />
            <h4>Detalles de facturación</h4>
            <Button onClick={() => methodBack(true)} variant="secondary" type="button">Volver</Button>
            <hr />

            <Form.Text className="text-muted">
                Los campos marcados con (*) son obligatorios.
            </Form.Text>
            <br />

            <Form onSubmit = { crearVentaExitosa }>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Tipo DNI*</Form.Label>
                    <Col sm="10">
                        <Form.Select value={tipoDNI} onChange={(e) => setTipoDNI(e.target.value)} aria-label="Default select example">
                            <option value="CC">CC - Cédula de Ciudadania</option>
                            <option value="TI">TI - Tarjeta de Identidad</option>
                            <option value="CE">CE - Cédula de Extranjeria</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">DNI*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={DNI} onChange={(e) => setDNI(e.target.value)} type="name" placeholder="Ingrese DNI del cliente" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Nombre*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value)} type="name" placeholder="Ingrese nombre del cliente" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Correo electrónico*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={correo} onChange={(e) => setCorreo(e.target.value)} type="name" placeholder="Ingrese el correo electrónico" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Telefono*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={telefono} onChange={(e) => setTelefono(e.target.value)} type="name" placeholder="Ingrese el telefono" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Dirección*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={direccion} onChange={(e) => setDireccion(e.target.value)} type="name" placeholder="Ingrese la dirección" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Ciudad*</Form.Label>
                    <Col sm="10">
                        <Form.Control value={ciudad} onChange={(e) => setCiudad(e.target.value)} type="name" placeholder="Ingrese la ciudad" />
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
                <Button variant="primary" type="submit" >Registrar Venta</Button>
                <hr />
            </Form>
        </div>
    )
}

export default Crear
