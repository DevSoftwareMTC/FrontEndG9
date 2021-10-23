import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crear from './Crear';
import Listar from './Listar';
import Editar from './Editar';
import { getAllSales, deleteSale } from './service'


const Ventas = () => {

    const [ventaElegida, setVentaElegida] = useState(undefined)
    const [listarPantalla, setListarPantalla] = useState(true)
    const [editarPantalla, setEditarPantalla] = useState(false)
    const [crearPantalla, setCrearPantalla] = useState(false)
    const [allSales, setAllSales] = useState([])

    const methodDelete = (saleDelete) => {
        deleteSale(saleDelete).then(() => {
            getAllSales().then(response => {
                setAllSales(response.data)
            });
        })

    }

    useEffect(() => {
        getAllSales().then(response => {
            setAllSales(response.data)
        })
    }, [])

    useEffect(() => {
        if (ventaElegida !== undefined) {
            setListarPantalla(false);
            setEditarPantalla(true);
        } else {
            setListarPantalla(true);
            setEditarPantalla(false);
        }
    }, [ventaElegida])

    useEffect(() => {
        if (crearPantalla) {
            setListarPantalla(false);
            setEditarPantalla(false);
        }
    }, [crearPantalla])

    useEffect(() => {
        if (listarPantalla) {
            getAllSales().then(response => {
                setAllSales(response.data)
                setCrearPantalla(false);
                setEditarPantalla(false);
            })
        }
    }, [listarPantalla])

    let pantalla;
    if (listarPantalla) {
        pantalla = <Listar methodDelete={methodDelete} methodCreateVentaElegida={setCrearPantalla} methodVentaElegida={setVentaElegida} sales={allSales} />;
    } else if (editarPantalla) {
        pantalla = <Editar methodBack={setListarPantalla} ventaElegida={ventaElegida} sales={allSales} />;
    } else {
        pantalla = <Crear methodBack={setListarPantalla} sales={allSales} />;
    }

    return (
        <div className="container">
            <hr /><h1>Módulo administrador de Ventas</h1><hr />
            {pantalla}
            {setAllSales}
        </div>
    )
}

export default Ventas
