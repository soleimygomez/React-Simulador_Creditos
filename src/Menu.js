import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import App from "./App.css";
import Client from "./components/client/Client";

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" to="/">
          Simulador de Credito
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/allClient">
                Clientes<span className="sr-only">(current)</span>{" "}
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/allPlan">
                Creditos<span className="sr-only">(current)</span>{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/createClient">
                Aun no eres Cliente Registrate!
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/createPlan">
                Solicita tu Plan de Credito<span className="sr-only">(current)</span>{" "}
              </NavLink>
            </li>
          </ul>
          <span class="navbar-text">
            Necesitas Dinero? No dejes pasar esta oportunidad !
          </span>
        </div>
      </nav>
    );
  }
}
