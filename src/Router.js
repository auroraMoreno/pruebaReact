import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './crud/Home';
import DetallesEmpleado from './crud/DetallesEmpleado';
import ModificarSalario from './crud/ModificarSalario';
import PlantillaFuncion from './crud/PlantillaFuncion';

export default class Router extends Component {
    render() {
        return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
                <Route exact path="/detalles/:idEmpleado"
                render={props=>{
                    var idEmpleado = props.match.params.idEmpleado;
                    console.log("dentro");
                    return <DetallesEmpleado idEmpleado={idEmpleado}/>
                }}
                />
                <Route exact path="/modificar" component={ModificarSalario}/>
                <Route exact path="/redireccion/:funcion" 
                render={props=>{
                  var funcion = props.match.params.funcion; 
                  return <PlantillaFuncion funcion={funcion}/>
                }

                }
                />
            </Switch>
          </BrowserRouter>
        )
    }
}
