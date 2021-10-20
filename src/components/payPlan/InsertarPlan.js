import React, { Component } from "react";
import { Redirect } from "react-router";
import { calculo } from "../../util/calculo";
import { addPlan } from "../../util/http/peticiones";
import { Link } from "react-router-dom";
import axios from "axios";

let plan = {};

let clientesPeticion = [];

// axios
//   .get("http://localhost:3001/client/all")
//   .then((response) => {
//     console.log(response);
//     clientesPeticion.push(response);
//   })
//   .catch((error) => {
//     console.log(error);
//     return error;
//   });


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
      listSelected: "",
      clientes: [],
    };;
    this.nuevoPlan = this.nuevoPlan.bind(this, true);
    this.handleChange = this.handleChange.bind(this, false);
  }

  
  componentDidMount() {
    // console.log(this.state.clientes);
    // console.log(clientesPeticion);
    axios
      .get("http://localhost:3001/client/all")
      .then((response) => {
        console.log(response);
        this.state.clientes.push(response.data);
       // this.setState({clientes:[response], ...this.state})
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
      console.log(this.state);
  }

  handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

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
      cuotas: this.state.cuota,
      forma_pago: this.state.forma_pago,
      valorcuota: calculo(
        this.state.interes,
        this.state.monto,
        this.state.cuotas
      ),
      cliente: this.state.cliente,
    };
    this.setState({
      status: true,
    });
  };

  render() {
    if (this.state.status === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <center>
          <h1>Calculadora de Creditos</h1>
        </center>
        <form
          onSubmit={() => {
            this.nuevoPlan();
          }}
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
              name="cuotas"
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
            >
            {this.state.clientes.map((elemento) => (
              <option key={elemento.cedula} value={elemento.cedula}>
                {elemento.nombre}
              </option>
            
            ))}
            </select>
          </div>
          <center>
            <button className="btn btn-success">Calcular</button>
          </center>
          <br />
        </form>
        {this.state.status && (
          <div>
            <h2>Informacion del Credito</h2>
            <div>
              <h5>Cuota a pagar </h5>
              <p>{this.plan.valorcuota}</p>
            </div>
            <button onClick={addPlan(plan)}>
              {" "}
              <Link to="/uploadDocument">Guardar Plan de Pago</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
