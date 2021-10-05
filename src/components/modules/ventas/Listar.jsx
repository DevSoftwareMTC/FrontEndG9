import React from 'react'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"


const sales = [{ idVenta: 1, tipoDNI: "TI", DNIcliente: 1020567899, nombre: "Victoria Valencia", total: 350000, fecha: "12/08/2021", correo: "vvalencia@unal.edu.co", telefono: 3152068799, direccion: "Avenida", ciudad: "Medellin" },
{ idVenta: 2, tipoDNI: "CC", DNIcliente: 1020567878, nombre: "Nicolas Quintero", total: 450000, fecha: "15/08/2021", correo: "vvalencia@unal.edu.co", telefono: 3152068799, direccion: "Avenida", ciudad: "Bogota" }]

const Listar = ({ methodVentaElegida }) => {
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
                            <Button variant="secondary" type="button">Crear</Button>
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
                    {sales.map(sale => {
                        return (
                            <tr key={sale.idVenta}>
                                <td>{sale.idVenta}</td>
                                <td>{sale.tipoDNI}</td>
                                <td>{sale.DNIcliente}</td>
                                <td>{sale.nombre}</td>
                                <td>$ {sale.total}</td>
                                <td>{sale.fecha}</td>
                                <td><Button onClick={() => methodVentaElegida(sale)} variant="secondary">Editar</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}

export default Listar
