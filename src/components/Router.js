import React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./../Menu";
import InsertarClient from "./client/InsertarClient";
import Plan from "./payPlan/Plan";
import InsertarPlan from "./payPlan/InsertarPlan";
import Client from "./client/Client";
import Main from "./document/Main";
import App from "./../App.css"
import imga from './../img.jpg'

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <div>
          <p className="contenido">
            Con esta herramienta podrás simular financiamientos, para obtener
            cuánto terminarías pagando por un crédito, así como una tabla de
            amortización para tu referencia. Pasos a seguir para realizar el
            cálculo Captura la fecha en que esperas recibir tu crédito y el
            monto que vas a solicitar. Selecciona la forma en que vas a realizar
            tus pagos y el plazo total del crédito. Ingresa la tasa de intereses
            del préstamo.
          </p>
          <br />
          <h3 className="menss">
            Recuerda que para solicitar nuestros creditos debe ser cliente
          </h3>
         
         
        </div>
          <Switch>
            <Route exact path="/allPlan" component={() => <Plan />} />
            <Route exact path="/allClient" component={() => <Client />} />
            <Route
              exact
              path="/createPlan"
              component={() => <InsertarPlan />}
            />
            <Route
              exact
              path="/createClient"
              component={() => <InsertarClient />}
            />
            <Route exact path="/uploadDocument" component={() => <Main />} />
          </Switch>
        </BrowserRouter>
       
      </div>
    );
  }
}
