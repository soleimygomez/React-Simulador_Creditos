import React, { Component } from "react";
import { Redirect } from "react-router";
import { calculo } from "../../util/calculo";
import { addPlan } from "../../util/http/peticiones";
import { Link } from "react-router-dom";
import axios from "axios";
import Main from "../document/Main";

var array;
 
let plan = {};
 


export default class InsertarPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      id: "",
      monto: "",
      interes: "",
      cuota: "",
      forma_pago: "",
      // valorcuota: "",
      cliente:"",
      listSelected: "",
      clientes: [],
    };
    this.nuevoPlan = this.nuevoPlan.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  componentDidMount() {
    // console.log(this.state.clientes);
    // console.log(clientesPeticion);
    axios
      .get("http://localhost:3001/client/all")
      .then((response) => {
      console.log(response);
       this.setState({...this.state,clientes:response.data}); 
       // this.setState({clientes:[response], ...this.state})
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
     // console.log(this.state);
      console.log(this.state.forma_pago)
     // console.log(array);
  }

  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;
     console.log("Seleccion: " + value);

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleChangeSelect = (e) => {
    const target = e.target;
    const value = target.value;
    console.log("Seleccion: " + value);
    this.setState({ ...this.state, listSelected: value });
  };

  nuevoPlan = (e) => {
    //e.preventDefault();

    plan = {
      id: this.state.id,
      monto: this.state.monto,
      interes: this.state.interes,
      cuota: this.state.cuota,
      forma_pago: this.state.forma_pago,
      valorcuota: calculo(
        this.state.interes,
        this.state.monto,
        this.state.cuota
      ),
      cliente: this.state.listSelected
      
    };
    this.setState({...this.state,
      status: true,
    });
      
  };

  render() {
     
    return (
      <div>
        <center>
          <h1>Calculadora de Creditos</h1>
        </center>
        <form
          onSubmit={
            this.nuevoPlan
          }
          style={{ width: "50%", margin: "auto" }}
        >
          <div className="form-group">
            <label>Monto:</label>
            <input
              type="text"
              name="monto"
              className="form-control"
              value={this.state.monto}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Interes:</label>
            <input
              type="text"
              name="interes"
              className="form-control"
              value={this.state.interes}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cuotas:</label>
            <input
              type="text"
              name="cuota"
              className="form-control"
              value={this.state.cuotas}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="exampleFormControlSelect1">Formas de Pago</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="forma_pago"
              value={this.state.forma_pago}
              onChange={this.handleChange}
            >
              <option value="Mensual">Mensual</option>
              <option value="Trimestral">Trimestral</option>
              <option value="Semestral">Semestral</option>
            </select>
          </div>
          <div className="form-group">
            <label>Cliente:</label>
           
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="cliente"
              value={this.state.listSelected}
               onChange={this.handleChangeSelect}
              // multiple={true}
              //defaultValue={this.state.clientes[0]}
            > <option value="0">---</option>
            {this.state.clientes.map((x) => (
             
              <option key={x.cedula} value={x.cedula}>
                {x.nombre}
              </option>
            
            ))}
            </select>
          </div>
          <center>
            <button  type="button" onClick={this.nuevoPlan} className="btn btn-success">Calcular</button>
          </center>
          <br />
        </form>
        {this.state.status && (
          <div>
            <h2>Informacion del Credito</h2>
            <div>
              <h5>Cuota a pagar </h5>
              <p>{plan.forma_pago}</p>
              <p>{plan.valorcuota}</p>
            </div>
            
            <Main idCliente={this.state.listSelected} plan={plan}/>
          </div>
        )}
      </div>
    );
  }
}
