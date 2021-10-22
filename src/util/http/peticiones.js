import { Global } from "@emotion/react";
import axios from "axios";

let url = Global.urlSimular + "/plan";

export const addPlan = (plan) => {
  axios

    .post("http://localhost:3001/plan/register", plan)
    .then((response) => {
      console.log(response.data);
      alert(JSON.stringify(response.data));

      // this.setState({clientes:[response], ...this.state})
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  // .post(url, plan)
  // .then((res) => {

  //   alert(res);

  // })
  // .catch((error) => console.log(error));
};
