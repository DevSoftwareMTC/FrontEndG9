import React, { useState, useEffect} from 'react'
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
    var cont=0;  //contador para enumerar los registros en la tabla
    const [categorias, setCategorias] = useState([])

    useEffect(() => {   //llena la tabla cuando carga el formulario
        fillTable(); //funcion llenar la tabla
    }, []) 
      

    const history= useHistory();
    const [formValues, setFormValues] = useState({});
    
        const fillTable = () => {
            fetch('http://localhost:5000/category/read')
                .then(response => response.json())
                .then(data => {
                  //  console.log('response para llenar tabla', data)
                    setCategorias(data);
                }
                ).catch((error) => {
                    console.log(error);
                });
        } 


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
            fillTable(); //llamamos esta funcion para refrescar la tabla despues de guardar el dato
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
                    <th scope="col">ID categoria</th>
                    <th scope="col">Nombre categoria</th>
                    <th scope="col">Opciones</th>

                </tr>
            </thead>
            <tbody>

            {  (categorias !== undefined && categorias.length > 0) ?
               
                categorias.map(item => {
                    
                   cont++;
                    return (<tr>
                        <th scope="row">{cont}</th>
                        <td>{item.id} </td>
                        <td>{item.name} </td>
                        <td><Button onClick={ModalEditarAbrir} value={item.id} variant="secondary">Editar</Button></td>
                    </tr>
                    );
                }) :
                categorias !== undefined ?
                    <div>
                        Ningun producto coincide con la busqueda
                    </div>
                    :
                    <div>
                        Error en la conexión, intenta mas tarde
                    </div>
            }




               
               
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


