import React from 'react'
import { Form, Button, Row, Col, Table } from "react-bootstrap"
import swal from 'sweetalert'

const Editar = () => {

    const editarVentaExitosa=()=>{
        swal({
            title: "Editar venta",
            text: "¿Estas seguro que quieres editar esta venta?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then(respuesta=>{
            if(respuesta){
                swal({text: "La venta se ha editado con exito", icon:"success"})
            }else{
                swal({text: "La venta no se ha podido editar", icon:"error"})
            }
        })
    }

    return (
        <div className="contenedor">
            <hr />
            <h4> (Editar) Detalles de facturación</h4>
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
                        <Form.Control type="name" placeholder="TI - Tarjeta de Identidad" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Nombre Cliente*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Victoria Valencia" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Correo electrónico*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="vvalencia@unal.edu.co" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Telefono*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="3005066745" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Dirección*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Avenida 80 # 45-60" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">Ciudad*</Form.Label>
                    <Col sm="10">
                        <Form.Control type="name" placeholder="Medellín" />
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
                <Button onClick={()=>editarVentaExitosa()} variant="primary" type="button">Guardar Cambios</Button>
                <hr />
            </Form>
        </div>
    )
}

export default Editar
