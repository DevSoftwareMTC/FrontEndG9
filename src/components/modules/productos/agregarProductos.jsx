import React, { useState } from 'react'
import { useHistory } from 'react-router'
import defImagen from './images/logo_1.png'


const AgregarProductos = () => {

    const history = useHistory();
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
                /* this.target.reset(), */
                alert("Registro exitoso!"));
                window.location.reload();
    }



    return (

        <>
            <main className="bg-white">
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
                                    <label for="tipoPrenda" className="text-dark form-label">Categoria del producto</label>
                                    <select onClick={categoria} onChange={changeField} value={formValues.categoria} name="categoria" className="form-select" id="categoria" required="">
                                        {(category !== undefined && category.length > 0) ?
                                            category.map(item => {
                                                return (
                                                    <option> {item.name}</option>
                                                )
                                            }) :
                                            category !== undefined ?
                                                <option>
                                                    Selecciona un tipo de prenda
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
                                    <label for="producto" className="text-dark form-label" id="nombreP">Nombre del producto</label>
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
                            <div>
                                <br />
                                <button onClick={submit} className="w-100 btn btn-primary btn-lg" type="submit">Agregar producto</button>
                            </div>

                        </form>

                    </div>
                </div>
            </main>

            <footer className="my-5 pt-5 text-muted text-center text-small bg-white">
                <p className="mb-1">© 2017–2021 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><p>Privacy</p></li>
                    <li className="list-inline-item"><p>Terms</p></li>
                    <li className="list-inline-item"><p>Support</p></li>
                </ul>
            </footer>
        </>

    )

};

export default AgregarProductos;
