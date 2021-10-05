import React from 'react'
import defImagen from './images/logo_1.png'



const editarProductos = () => {

    const cargarImagen = (event) => {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    }

    const alertEditarProducto = (e) => {
        e.preventDefault();
        alert("Cambios guardados con éxito")
    }
    

    return (

        <>
            <main className="bg-white">
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
                                    <label for="tipoPrenda" className="text-dark form-label">Tipo de prenda</label>
                                    <select className="form-select" id="tipoPrenda" required="">
                                        <option value="">Pantalón</option>
                                        <option>Camisa</option>
                                        <option>Camiseta</option>
                                        <option>Pantalón</option>
                                        <option>Bermuda</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Selecciona un tipo de prenda válido.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="talla" className="text-dark form-label">Talla</label>
                                    <select className="form-select" id="tipoPrenda" required="">
                                        <option value="">S</option>
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
                                    <label for="producto" className="text-dark form-label">Camiseta</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">#</span>
                                        <input type="text" className="form-control" id="producto" placeholder="Camiseta a rayas"
                                            required="" />
                                        <div className="invalid-feedback">
                                            Este producto ya existe.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="manufactura" className="text-dark form-label">Manufactura <span className="text-muted">(Marca o importador del
                                        producto)</span></label>
                                    <input type="text" className="form-control" id="manufactura"
                                        placeholder="Gef" />
                                    <div className="invalid-feedback">
                                        Valor ingresado incorrecto.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="descpripcion" className="text-dark form-label">Descripción del producto</label>
                                    <input type="text" className="form-control" id="descpripcion"
                                        placeholder="Camisa a rayas en algodón" required="" />
                                    <div className="invalid-feedback">
                                        Descripción inválida.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="precio" className="text-dark form-label">Precio del producto</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">COP</span>
                                        <input type="number" className="form-control" id="precio" placeholder="47000"
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
                                        <input type="number" className="form-control" id="cantidad"
                                            placeholder="5" required="" />
                                        <div className="invalid-feedback">
                                            Valor incorrecto.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-5 file-loading">
                                    <input id="input-image-product" name="input-image-product" type="file" accept="image/*" onChange={cargarImagen} style={{ display: "none" }} />
                                    <label className="w-100 btn btn-secondary btn-lg" for="input-image-product">Cargar imagen del producto</label>
                                    <img class="rounded mx-auto d-block" id="output" width="50%" height="auto" alt="" />
                                </div>

                            </div>
                            <div>
                                <br />
                                <button onClick={alertEditarProducto} className="w-100 btn btn-primary btn-lg" type="submit">Guardar cambios</button>
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

export default editarProductos;
