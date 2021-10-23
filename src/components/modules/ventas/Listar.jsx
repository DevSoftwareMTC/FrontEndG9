import React from 'react'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"

const Listar = ({ methodCreateVentaElegida, methodVentaElegida, methodDelete, sales }) => {
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
                                type="search"
                                placeholder="ID Venta / DNI / Nombre del cliente"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Ir</Button>
                            <Button onClick={() => methodCreateVentaElegida(true)} variant="secondary" type="button">Crear</Button>
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
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.typeDni}</td>
                                <td>{sale.dni}</td>
                                <td>{sale.name}</td>
                                <td>{sale.email}</td>
                                <td>{sale.createdAt}</td>
                                <td>
                                    <Button onClick={() => methodVentaElegida(sale)} variant="secondary">Editar</Button>
                                    {"  "}
                                    <Button onClick={() => methodDelete(sale)} variant="danger">Eliminar</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}

export default Listar
