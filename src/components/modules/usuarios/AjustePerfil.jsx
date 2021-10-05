import React from 'react'

const AjustePerfil = () => {
    return (
        <div>
            <div>
                <br/>
                <div class ="container d-flex flex-column bg-light bg-body rounded">
                <form class ="row g-3">
                <div class ="col-6">
                <label for="name" class ="form-label">Nombre</label>
                <input type ="text" class ="form-control" id="Nombre" placeholder="Escriba aquí"/>
                </div>
                <div class ="col-md-6">
                <label for="lastname" class ="form-label">Apellido</label>
                <input type ="text" class ="form-control" id="Apellido" placeholder="Escriba aquí"/>
                </div>
                <div class ="col-12">
                <label for="Email" class ="form-label">Email</label>
                <input type ="text" class ="form-control" id="Email" placeholder="ejemplo@mail.com"/>
                </div>
                <div class ="col-12">
                <label for="Dirección" class ="Dirección">Dirección</label>
                <input type ="text" class ="form-control" id="Dirección" placeholder="Escriba aquí"/>
                </div>
                <div class ="col-md-4">
                <label for="phone" class ="celular">Celular</label>
                <input type ="number" class ="form-control" id="celular" placeholder="0000000000"/>
                </div>

                <div class ="col-md-4">
                <label for="inputState" class ="form-label">Estado</label>
                <select id="inputState" class ="form-select">
                <option selected>Elegir</option>
                <option>Activo</option>
                <option>Inactivo</option>
                </select>
                </div>
                <div class ="col-md-4">
                <label for="inputState" class ="form-label">Rol</label>
                <select id="inputState" class ="form-select">
                <option selected>Elegir</option>
                <option>Cliente</option>
                <option>Vendedor</option>
                </select>
                </div>
                <div class ="col-12">
                <button type ="submit" class ="btn btn-primary">Guardar cambios</button>
                </div>
                </form>
                </div>

            </div>

            <div class="alert alert-success alert-dismissible fade show shadow p-3 mb-5 " role="alert">
                <strong>Actualizado</strong>
                <p>El usuario fue actualizado con éxito</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </div>
    )
}

export default AjustePerfil
