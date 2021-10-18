import React, { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import { useHistory } from 'react-router'
import { Table, Button, Form, Navbar, FormControl, Container, Modal } from "react-bootstrap"
//import AgregarCategorias from '../categorias/AgregarCategorias'
//import EditarCategorias from '../categorias/EditarCategorias'




const TablaCategorias = () => {
    const history= useHistory();
    const [formValues, setFormValues] = useState({});
    
    const submitCategory = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch('http://localhost:5000/category', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error: ', error))
            .then(response => console.log('Success: ', response), e.preventDefault(),
            handleClose(),//llamamos la funcion para que cierre el modal despues de grabar la categoria
            alert("Registro exitoso!"));
            
    }

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

 //METODOS PARA LLAMAR EL MODAL
  const [show, setShow] = useState(false);
     //modal agregar la categoria
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    
    
     //modal editar la categoria

     const [showEditarCat, setShowEditar] = useState(false);
     const ModalEditarCerrar = () => setShowEditar(false);
     const ModalEditarAbrir = () => setShowEditar(true);

    return (
       <div>
        <div className = "table container">
          <section class="content-header">
                    <h1>
                        Módulo administrador de categorias
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>
                    
                        <li class="active">Administrar categorias</li>
                    </ol>
        </section>
         
         
         
         
            <div class="box-header with-border">
               
                    <button onClick={handleShow} type="button" class="btn btn-primary">  

                        Agregar categoria
                    </button>
               
           </div>
        
           <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Filtro</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container fluid>
                <Form className="d-flex">
                <FormControl
                type ="search"
                placeholder="ID caegoria/ DNI / nombre de la categoria"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
                </Container>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre categoria</th>
                    <th scope="col">Opciones</th>

                </tr>
            </thead>
            <tbody>
               <tr>
                    <th scope="row">1</th>
                    <td>Pantalon jean importado </td>
                    <td><Button onClick={ModalEditarAbrir} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Jean corto </td>
                    <td><Button onClick={ModalEditarAbrir} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Jean corto </td>
                    <td><Button onClick={ModalEditarAbrir} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Gorra deportiva bulls</td>
                    <td><Button onClick={ModalEditarAbrir} variant="secondary">Editar</Button></td>
                </tr>
            </tbody>
        </table>
            {/* ESTE SWITCH NO FUNCIONA, EL QUE FUNCIONA ES EL "ORIGINAL" DESDE EL SIDEBAR.JSX */}
            
        
        </div >
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar Categoria</Modal.Title>
            </Modal.Header>
                    <Modal.Body>
                    <div className="col-12">
                                    <label for="producto" className="text-dark form-label">Digita la categoria</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">#</span>
                                        <input onChange={changeField} value={formValues.nombreCategoria} name="name" type="text" className="form-control" id="nombreCategoria" placeholder="Categoria"
                                            required="" />
                                        <div className="invalid-feedback">
                                            Este producto ya existe.
                                        </div>
                       </div>
                    </div>

                        
                    </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={submitCategory}>
                Guardar Categoria
            </Button>
            </Modal.Footer>
      </Modal>

      <Modal show={showEditarCat} onHide={ModalEditarAbrir}>
            <Modal.Header closeButton>
            <Modal.Title>Editar Categoria</Modal.Title>
            </Modal.Header>
                    <Modal.Body>
                    <div className="col-12">
                                    <label for="producto" className="text-dark form-label">Digita la categoria a editar</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">#</span>
                                        <input onChange={changeField} value={formValues.editarCategoria} name="editarCategoria" type="text" className="form-control" id="producto" placeholder="Categoria"
                                            required="" />
                                        <div className="invalid-feedback">
                                            Este producto ya existe.
                                        </div>
                       </div>
                    </div>

                        
                    </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={ModalEditarCerrar}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={ModalEditarCerrar}>
                Guardar Cambios
            </Button>
            </Modal.Footer>
      </Modal>



        </div>   
    )
}

export default TablaCategorias


