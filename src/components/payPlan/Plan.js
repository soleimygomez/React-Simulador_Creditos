import { Global } from "@emotion/react";
import axios from "axios";
import React, { Component } from "react";

export default class Plan extends Component {
  state = {
    Planes: [],
    status: false,
  };

  cargarPlanes = () => {
    axios
    .get("http://localhost:3001/plan/all")
    .then((response) => {
    console.log(response);
     this.setState({...this.state,planes:response.data,status:true}); 
     // this.setState({clientes:[response], ...this.state})
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
    console.log(this.state);
   
    
  };

  componentDidMount = () => {
    this.cargarPlanes();
  };

  render(){
    return(
        <div>
            <h1>Creditos</h1>
            <table className="table table-info">
                <thead className="thead-dark">
                <tr>
                    <th>Id del Credito</th>
                    <th>Monto</th>
                    <th>Interes</th>
                    <th>Forma de Pago </th>
                    <th>Valor de Cuota</th>
                    <th>Cliente</th>
                    
                </tr>
                </thead>
                <tbody>
                    {this.state.status===true&&(
                        this.state.planes.map((plan, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{plan.id}</td>
                                    <td>${plan.monto}</td>
                                    <td>{plan.interes}%</td>
                                    <td>{plan.forma_pago}</td>
                                    <td>${plan.valorcuota}</td>
                                    <td>{plan.cliente}</td>
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
