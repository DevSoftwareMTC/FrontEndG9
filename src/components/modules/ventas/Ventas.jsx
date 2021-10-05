import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './Crear';
import Listar from './Listar';
import Editar from './Editar';

const Ventas = () => {

    const [ventaElegida, setVentaElegida] = useState(undefined)
    const [listarPantalla, setListarPantalla] = useState(true)
    const [editarPantalla, setEditarPantalla] = useState(false)
    const [crearPantalla, setCrearPantalla] = useState(false)

    useEffect(() => {
        console.log(ventaElegida)
        if (ventaElegida !== undefined) {
            setListarPantalla(false);
            setEditarPantalla(true);
        } else {
            setListarPantalla(true);
            setEditarPantalla(false);
        }
    }, [ventaElegida])

    let pantalla;
    if (listarPantalla) {
        pantalla = <Listar methodVentaElegida={setVentaElegida} />;
    } else if (editarPantalla) {
        pantalla = <Editar ventaElegida={ventaElegida} />;
    } else {
        pantalla = <Crear />;
    }

    return (
        <div className="container">
            <hr /><h1>Módulo administrador de Ventas</h1><hr />
            {pantalla}
        </div>
    )
}

export default Ventas
