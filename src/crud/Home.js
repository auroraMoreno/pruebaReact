import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';

export default class Home extends Component {

    state={
        plantilla:{},
        status: false
    }

    mostrarPlantilla=()=>{
        axios.get(Global.url + "/api/Plantilla").then(res=>{
            this.setState({
                plantilla: res.data,
                status:true
            });
        })
    }

    componentDidMount(){
        this.mostrarPlantilla();
    }

    render() {
        if(this.state.plantilla.length > 0){
            return (
                <div>
                    <h1>Plantilla</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id empleado</th>
                                <th>Apellido</th>
                                <th>Funcion</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.plantilla.map((plant,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{plant.idEmpleado}</td>
                                        <td>{plant.apellido}</td>
                                        <td>{plant.funcion}</td>
                                        <td>
                                            <a href={"/detalles/" + plant.idEmpleado}>Detalles</a>
                                            </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <a href="/modificar">Modificar</a>
                </div>
            ); 
        }else if(this.state.status==false){
            return <h1>Cargando...</h1>
        }
     
    }
}
