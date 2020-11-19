import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom';
import Global from './../Global';

export default class ModificarSalario extends Component {

    selectFuncionRef = React.createRef();
    cajaSalarioRef= React.createRef();

    state={
        funciones:[],
        status:false,
        update:false
    }

    mostrarFunciones=()=>{
        axios.get(Global.url + "/api/Plantilla/Funciones").then(res=>{
            this.setState({
                funciones:res.data,
                status:true
            });
            console.log(this.state.funciones);
        });
    }

    aumentarSalario = e =>{
        e.preventDefault();
        var func = this.selectFuncionRef.current.value;
        var num = this.cajaSalarioRef.current.value;
        var request = "/api/Plantilla/" + func + "/" + num;
        var url = Global.url + request;
        axios.put(url).then(res=>{
            this.setState({
                update:true
            });
        });

    }

    componentDidMount(){
        this.mostrarFunciones();
        
    }

    render() {
        if(this.state.update == true){
            return <Redirect to={"/redireccion/" + this.selectFuncionRef.current.value}/>
        }
            return (
                <div>
                    <form onSubmit={this.aumentarSalario}>
                        <label>Funciones:</label>
                        <select name="selectFuncion" ref={this.selectFuncionRef}>
                           {this.state.funciones.map((fun,i)=>{
                                return(<option key={i} value={fun}>{fun}</option>)
                            })}
                        </select>
                        <label>Incremento</label>
                        <input type="number" name="cajaSalario" ref={this.cajaSalarioRef}/>
                        <button>Aumentar salario</button>
                    </form>
                </div>
            )

    }
}
