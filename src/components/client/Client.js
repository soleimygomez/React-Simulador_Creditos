import { Global } from "@emotion/react";
import axios from "axios";
import React, { Component } from "react";

export default class Client extends Component {
  state = {
    clientes: [],
    status: false,
  };

  cargarClientes = () => {
    var url = Global.urlCliente;
    var request = "/cliente";
    axios.get(url + request).then((res) => {
      this.setState({
        clientes: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarClientes();
  };

  render(){
    return(
        <div>
            <h1>Clientes</h1>
            <table className="table table-info">
                <thead className="thead-dark">
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Correo</th>
                    
                </tr>
                </thead>
                <tbody>
                    {this.state.status===true&&(
                        this.state.clientes.map((client, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{client.cedula}</td>
                                    <td>{client.nombre}</td>
                                    <td>{client.apellido}</td>
                                    <td>{client.direccion}</td>
                                    <td>{client.correo}</td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    )

  }
}
