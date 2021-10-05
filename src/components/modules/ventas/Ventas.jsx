import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Crear from './Crear';
import Listar from './Listar';
import Editar from './Editar';

const Ventas = () => {
    return (
        <Router>
            <div className="container">
                <hr />
                <h1>Módulo administrador de ventas</h1>
                <hr />
                <Link to="/ventas/crear"><Button href="crear" variant="secondary">Crear</Button></Link>
                <Link to="/ventas/listar"><Button href="listar" variant="secondary">Listar</Button></Link>
                <Switch>
                    <Route path="/ventas/crear">
                        <Crear />
                    </Route>
                    <Route path="/ventas/listar">
                        <Listar />
                    </Route>
                    <Route path="/ventas/editar">
                        <Editar />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Ventas
