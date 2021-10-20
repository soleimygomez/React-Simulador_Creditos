import { Global } from "@emotion/react";
import axios from "axios";

let url = Global.urlplan + "/plan";

export const addPlan = (plan) => {
  axios
    .post(url, plan)
    .then((res) => {
    
      alert(res);
      
    })
    .catch((error) => console.log(error));

    
};

