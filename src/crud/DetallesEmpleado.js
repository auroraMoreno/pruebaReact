import React, { Component, useEffect } from 'react';
import axios from "axios";
import Global from "./../Global";

export default class DetallesEmpleado extends Component {

    constructor(props){
        super(props);
        this.state={
            idEmpleado:props.idEmpleado
        }
    }

    state={
        idEmpleado:0,
        empleado:{},
        status:false
    }

    buscarEmpleado=()=>{
        axios.get(Global.url + "/api/Plantilla/" + this.state.idEmpleado).then(res=>{
            this.setState({
                empleado: res.data,
                status:true
            });
            console.log(this.state.empleado);
        });
    }

    componentWillMount(){
        this.buscarEmpleado();
    }

    render() {
        if(this.state.empleado !=null){
            return(
                <div>
                <p>Detalles {this.state.empleado.apellido}</p>
                <p>Suelo: {this.state.empleado.salario}</p>
                </div>
            )
        }else if (this.state.status == false){
            return <h1>Cargando datos...</h1>
        }else{
          return <h1>Ni idea</h1>
        }
    }
}
