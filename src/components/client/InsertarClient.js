import { Global } from "@emotion/react";
import axios from "axios";
import React, { Component } from "react";
import { Redirect } from 'react-router';

let cliente={
}
const initialState = {
  //las variables
  status: false,
  cedula: "",
  nombre: "",
  apellido: "",
  telefono:"",
  direccion: "",
  correo: "",
  
 
};
export default class InsertarClient extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.nuevoClient = this.nuevoClient.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  nuevoClient = (e) => {
    e.preventDefault();

      cliente = {
      cedula: this.state.cedula,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      telefono:this.state.telefono,
      direccion: this.state.direccion,
      correo: this.state.correo,
      
    };
    
    var url = Global.urlclientes + "/clientes";
    axios.post(url, cliente).then((res) => {
      this.setState({ status: true });
    });
   
  };
  render() {
    if (this.state.status === true) {
     return <Redirect to="/src/App.js" />
    }
    return (
      <div>
        <h1>Nuevo Cliente</h1>
        <form
        
          onSubmit={this.nuevoClient}
          style={{ width: "50%", margin: "auto" }}
        >
          <label>Cedula:</label>
          <input
            type="text"
            name="cedula"
            className="form-control"
            value={this.state.cedula}
            onChange={this.handleChange}
          />
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={this.state.nombre}
            onChange={this.handleChange}
          />
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            value={this.state.apellido}
            onChange={this.handleChange}
          />
          
            <label>Telefono:</label>
          
            <input
            type="text"
            name="telefono"
            className="form-control"
            value={this.state.telefono}
            onChange={this.handleChange}
          />
          <label>Direccion:</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            value={this.state.direccion}
            onChange={this.handleChange}
          />
          <label>Correo:</label>
          <input
            type="text"
            name="correo"
            className="form-control"
            value={this.state.correo}
              onChange={this.handleChange}
          />
          
           <center><button className="btn btn-success">Registrarme Como Cliente</button> </center>
           <br />
        </form>
      </div>
    )
}
}
