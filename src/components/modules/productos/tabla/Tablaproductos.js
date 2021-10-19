import React, { useState, useEffect } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import { useHistory } from 'react-router'
import { Table, Button, Form, Navbar, FormControl, Container, Modal } from "react-bootstrap"
import agregarProductos from '../agregarProductos';
import editarProductos from '../editarProductos';
import defImagen from '../images/logo_1.png'



const Tablaproductos = () => {
    const history = useHistory();

    const agregar = (e) => {
        /* e.preventDefault();
        history.push('/productos/agregar-productos') */
        e.preventDefault();
        handleShowP();
    }

    const [productos, setProductos] = useState([])

    useEffect(() => {   //llena la tabla cuando carga el formulario
        fetch('http://localhost:5000/product/')
            .then(response => response.json())
            .then(data => {
                //  console.log('response para llenar tabla', data)
                setProductos(data);
            }
            ).catch((error) => {
                console.log(error);
            });

    }, [])

    //METODOS PARA LLAMAR EL MODAL
    const [showP, setShowP] = useState(false);

    //modal agregar producto
    const handleCloseP = () => setShowP(false);
    const handleShowP = () => setShowP(true);

    //modal editar producto
    const [showEditarProd, setShowEditarP] = useState(false);
    const ModalEditarPCerrar = () => setShowEditarP(false);
    const ModalEditarPAbrir = () => setShowEditarP(true);

    const [formValues, setFormValues] = useState({});
    const [category, setCategories] = useState([])

    /*  const cargarImagen = (event) => {
         var image = document.getElementById('output');
         image.src = URL.createObjectURL(event.target.files[0]);
     } */


    const alertRegistro = (e) => {
        e.preventDefault();
        alert("Registro exitoso!")
    }

    const categoria = () => {
        fetch('http://localhost:5000/category/read')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            }
            ).catch((error) => {
                console.log(error);
            })
    }


    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('formValues', formValues);

        fetch('http://localhost:5000/product/', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error: ', error))
            .then(response => console.log('Success: ', response), e.preventDefault(),
                alert("Registro exitoso!"));
                handleCloseP();
        window.location.reload();
    }

    return (
        <div className="table container">
            <section class="content-header">
                <h1>
                    Módulo administrador de productos
                </h1>
                <ol class="breadcrumb">
                    <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>

                    <li class="active">Administrar productos</li>
                </ol>
            </section>




            <div class="box-header with-border">

                <button onClick={agregar} type="button" class="btn btn-primary" >
                    Agregar producto
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
                                    type="search"
                                    placeholder="ID Venta / DNI / Nombre del cliente"
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
                        <th scope="col">Nombre producto</th>
                        <th scope="col">Talla</th>
                        <th scope="col">Manufactura</th>
                        <th scope="col">Descripción del producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Categoría</th>

                    </tr>
                </thead>
                <tbody>

                    {(productos !== undefined && productos.length > 0) ?
                        productos.map(item => {
                            return (<tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.nombreProducto} </td>
                                <td>{item.talla} </td>
                                <td>{item.manufactura} </td>
                                <td>{item.descripcionProducto} </td>
                                <td>{item.precio} </td>
                                <td>{item.stock} </td>
                                <td>{item.category} </td>
                                <td><Button onClick={ModalEditarPAbrir} value={item.id} variant="secondary">Editar</Button></td>
                            </tr>
                            );
                        }) :
                        productos !== undefined ?
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

            <Modal show={showP} onHide={handleShowP}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="py-5 text-center">
                        <img className="d-block-mx-auto mb-2" src={defImagen} alt="" width="20%" height="auto" />
                        <h2 className="text-dark">Agrega un producto</h2>
                        <p className="text-dark lead">A continuación podrás agregar un producto al sistema. Recuerda que todos los campos son
                            obligatorios.</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-10 col-lg-8">
                            <h4 className="text-dark mb-3">Información del producto</h4>
                            <form className="needs-validation" novaldiate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="categoria" className="text-dark form-label">Categoria del producto</label>
                                        <select onClick={categoria} onChange={changeField} value={parseInt(formValues.category)} name="category" className="form-select" id="categoria" required="">
                                            {(category !== undefined && category.length > 0) ?
                                                category.map(item => {
                                                    return (
                                                        <option value={item.id}> {item.name}</option>
                                                    )
                                                }) :
                                                category !== undefined ?
                                                    <option>
                                                        Selecciona categoria del producto
                                                    </option>
                                                    :
                                                    <option>
                                                        Error en la conexión, intenta mas tarde
                                                    </option>
                                            }
                                        </select>
                                        <div className="invalid-feedback">
                                            Selecciona un tipo de prenda válido.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="talla" className="text-dark form-label">Talla</label>
                                        <select onChange={changeField} value={formValues.talla} name="talla" className="form-select" id="tallaPrenda" required="">
                                            <option value="">Choose...</option>
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Selecciona una talla de prenda válida.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="producto" className="text-dark form-label">Nombre del producto</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">#</span>
                                            <input onChange={changeField} value={formValues.nombreProducto} name="nombreProducto" type="text" className="form-control" id="producto" placeholder="Ingresa el nombre del producto"
                                                required="" />
                                            <div className="invalid-feedback">
                                                Este producto ya existe.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="manufactura" className="text-dark form-label">Manufactura <span className="text-muted">(Marca o importador del
                                            producto)</span></label>
                                        <input onChange={changeField} value={formValues.manufactura} name="manufactura" type="text" className="form-control" id="manufactura"
                                            placeholder="Ingresa la manufactura del producto" />
                                        <div className="invalid-feedback">
                                            Valor ingresado incorrecto.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="descpripcion" className="text-dark form-label">Descripción del producto</label>
                                        <input onChange={changeField} value={formValues.descripcionProducto} name="descripcionProducto" type="text" className="form-control" id="descpripcion"
                                            placeholder="Realiza una breve descripción del producto" required="" />
                                        <div className="invalid-feedback">
                                            Descripción inválida.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="precio" className="text-dark form-label">Precio del producto</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">COP</span>
                                            <input onChange={changeField} value={formValues.precio} name="precio" type="number" className="form-control" id="precio" placeholder="Ingresa el precio del producto"
                                                required="" />
                                            <div className="invalid-feedback">
                                                Valor incorrecto.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-8">
                                        <label for="cantidad" className="text-dark form-label">Stock</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">Numero de unidades</span>
                                            <input onChange={changeField} value={formValues.stock} name="stock" type="number" className="form-control" id="cantidad"
                                                placeholder="Ingresa el número de unidades a agregar" required="" />
                                            <div className="invalid-feedback">
                                                Valor incorrecto.
                                            </div>
                                        </div>
                                    </div>

                                    {/* PARTE PARA AGREGAR IMAGEN, POR AHORA NO ESTA INTEGRADA CON LA DB */}

                                    {/* <div className="col-sm-5 file-loading">
                                    <input id="input-image-product" name="input-image-product" type="file" accept="image/*" onChange={cargarImagen} style={{ display: "none" }} />
                                    <label className="w-100 btn btn-secondary btn-lg" for="input-image-product">Cargar imagen del producto</label>
                                    <img class="rounded mx-auto d-block" id="output" width="50%" height="auto" alt="" />
                                </div> */}

                                </div>
                                {/* <div>
                                    <br />
                                    <button onClick={submit} className="w-100 btn btn-primary btn-lg" type="submit">Agregar producto</button>
                                </div> */}

                            </form>

                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseP}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={submit}>
                        Agregar producto
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showEditarProd} onHide={ModalEditarPAbrir}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="py-5 text-center">
                        <img className="d-block-mx-auto mb-2" src={defImagen} alt="" width="20%" height="auto" />
                        <h2 className="text-dark">Edita un producto</h2>
                        <p className="text-dark lead">A continuación podrás editar un producto existente en el sistema. Recuerda que todos los campos son
                            obligatorios.</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-10 col-lg-8">
                            <h4 className="text-dark mb-3">Información del producto</h4>
                            <form className="needs-validation" novaldiate="">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label for="categoria" className="text-dark form-label">Categoria del producto</label>
                                        <select onClick={categoria} onChange={changeField} value={parseInt(formValues.category)} name="category" className="form-select" id="categoria" required="">
                                            {(category !== undefined && category.length > 0) ?
                                                category.map(item => {
                                                    return (
                                                        <option value={item.id}> {item.name}</option>
                                                    )
                                                }) :
                                                category !== undefined ?
                                                    <option>
                                                        Selecciona categoria del producto
                                                    </option>
                                                    :
                                                    <option>
                                                        Error en la conexión, intenta mas tarde
                                                    </option>
                                            }
                                        </select>
                                        <div className="invalid-feedback">
                                            Selecciona un tipo de prenda válido.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label for="talla" className="text-dark form-label">Talla</label>
                                        <select onChange={changeField} value={formValues.talla} name="talla" className="form-select" id="tallaPrenda" required="">
                                            <option value="">Choose...</option>
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Selecciona una talla de prenda válida.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="producto" className="text-dark form-label">Nombre del producto</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">#</span>
                                            <input onChange={changeField} value={formValues.nombreProducto} name="nombreProducto" type="text" className="form-control" id="producto" placeholder="Ingresa el nombre del producto"
                                                required="" />
                                            <div className="invalid-feedback">
                                                Este producto ya existe.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="manufactura" className="text-dark form-label">Manufactura <span className="text-muted">(Marca o importador del
                                            producto)</span></label>
                                        <input onChange={changeField} value={formValues.manufactura} name="manufactura" type="text" className="form-control" id="manufactura"
                                            placeholder="Ingresa la manufactura del producto" />
                                        <div className="invalid-feedback">
                                            Valor ingresado incorrecto.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="descpripcion" className="text-dark form-label">Descripción del producto</label>
                                        <input onChange={changeField} value={formValues.descripcionProducto} name="descripcionProducto" type="text" className="form-control" id="descpripcion"
                                            placeholder="Realiza una breve descripción del producto" required="" />
                                        <div className="invalid-feedback">
                                            Descripción inválida.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="precio" className="text-dark form-label">Precio del producto</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">COP</span>
                                            <input onChange={changeField} value={formValues.precio} name="precio" type="number" className="form-control" id="precio" placeholder="Ingresa el precio del producto"
                                                required="" />
                                            <div className="invalid-feedback">
                                                Valor incorrecto.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-8">
                                        <label for="cantidad" className="text-dark form-label">Stock</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">Numero de unidades</span>
                                            <input onChange={changeField} value={formValues.stock} name="stock" type="number" className="form-control" id="cantidad"
                                                placeholder="Ingresa el número de unidades a agregar" required="" />
                                            <div className="invalid-feedback">
                                                Valor incorrecto.
                                            </div>
                                        </div>
                                    </div>

                                    {/* PARTE PARA AGREGAR IMAGEN, POR AHORA NO ESTA INTEGRADA CON LA DB */}

                                    {/* <div className="col-sm-5 file-loading">
                                    <input id="input-image-product" name="input-image-product" type="file" accept="image/*" onChange={cargarImagen} style={{ display: "none" }} />
                                    <label className="w-100 btn btn-secondary btn-lg" for="input-image-product">Cargar imagen del producto</label>
                                    <img class="rounded mx-auto d-block" id="output" width="50%" height="auto" alt="" />
                                </div> */}

                                </div>

                            </form>

                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ModalEditarPCerrar}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={ModalEditarPCerrar}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* ESTE SWITCH NO FUNCIONA, EL QUE FUNCIONA ES EL "ORIGINAL" DESDE EL SIDEBAR.JSX */}
            <Switch>
                <Route exact path='/productos/agregar-productos' component={agregarProductos} />
                <Route exact path='/productos/editar-productos' component={editarProductos} />
            </Switch>

        </div >
    )
}

export default Tablaproductos



