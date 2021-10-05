
import { useHistory } from 'react-router'

const Usuarios = () => {

    const history= useHistory();

   const editar =(e) => {
       e.preventDefault();
       history.push('/usuarios/ajuste-perfil')
   }

    return (
        <>
            <hr />
            <h1>Gestión de Usuarios</h1>
            <hr />
            <div class="container-xxl d-flex flex-column bg-light">
                <br />
                <div class="container d-flex flex-column bg-light border-bottom bg-body rounded ">
                    <div class="bd-subnavbar py-2" aria-label="Secondary navigation">
                        <div class="container-xxl d-flex aling-items-md-center bg-body rounded">
                            <form class="bd-search position-relative me-auto bg-body rounded">

                                <div class="form-floating ">
                                    <input type="username " from-control id=" floatingInput" placeholder="Buscar" />
                                </div>
                            </form>
                            <div class="dropdown">
                                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Estado
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item text text-success" href="#">Activo</a></li>
                                    <li><a class="dropdown-item text text-danger" href="#">Inactivo</a></li>
                                </ul>
                            </div>

                            <div class="dropdown">
                                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Mostrar
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">20</a></li>
                                    <li><a class="dropdown-item" href="#">40</a></li>
                                    <li><a class="dropdown-item" href="#">60</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container d-flex flex-column bg-light">
                    <table class="table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fecha de registro</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-danger">Inactivo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-danger">Inactivo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td class="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" class="btn btn-danger">X</button>
                                        <button onClick={editar} type="button" class="btn btn-warning">Editar</button>
                                        <button type="button" class="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo; </span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo; </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Usuarios;