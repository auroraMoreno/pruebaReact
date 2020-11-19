import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Global from './../Global';

export default class PlantillaFuncion extends Component {

    constructor(props) {
        super(props);
        this.state={
            funcion:props.funcion
        }
    }

    state={
        funcion:"",
        empleados:[],
        status:false
    }

    buscarEmpleados =()=>{
        axios.get(Global.url + "/api/Plantilla/PlantillaFuncion/" +this.state.funcion).then(res=>{
            this.setState({
                empleados:res.data,
                status:true
            });
            console.log(this.state.empleados);
        });
    }

    componentDidMount(){
        this.buscarEmpleados();
    }

    render() {
        if(this.state.empleados !=null){
            return (
                <div>
                 {this.state.empleados.map((emp,i)=>{
                     return(
                         <div>
                        <p key={i}>{emp.apellido}</p>
                        <p>{emp.salario}</p>
                         </div>
                     )
                 })}
                 </div>
             )
        }else if (this.state.status == false){
            return <h1>Cargando datos...</h1>
        }else{
          return <h1>Ni idea</h1>
        }
        
    }
}
