import React from 'react'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"

const Listar = () => {
    return (
        <div>
            <hr />

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Filtro</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container fluid>
                <Form className="d-flex">
                <FormControl
                type ="search"
                placeholder="ID Venta / DNI / Nombre del cliente"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
                </Container>
                </Navbar.Collapse>
            </Navbar>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID Venta</th>
                        <th>Tipo DNI</th>
                        <th>DNI Cliente</th>
                        <th>Nombre Cliente</th>
                        <th>Total</th>
                        <th>Fecha</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>TI</td>
                        <td>1020567899</td>
                        <td>Victoria Valencia</td>
                        <td>$ 350.000</td>
                        <td>12/08/2021</td>
                        <td><Button href="Editar" variant="secondary">Editar</Button></td>
                    </tr>
                    <tr>
                        <td>0002</td>
                        <td>CC</td>
                        <td>1020567899</td>
                        <td>Nicolas Ticora</td>
                        <td>$ 50.500</td>
                        <td>22/09/2021</td>
                        <td><Button href="Editar" variant="secondary">Editar</Button></td>
                    </tr>
                    <tr>
                        <td>0003</td>
                        <td>CE</td>
                        <td>1020567899</td>
                        <td>John Jairo Ortiz</td>
                        <td>$ 65.800</td>
                        <td>01/10/2021</td>
                        <td><Button href="Editar" variant="secondary">Editar</Button></td>
                    </tr>
                </tbody>
            </Table>

        </div >
    )
}

export default Listar
