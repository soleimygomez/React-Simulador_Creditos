import React from "react";
import axios from "axios";
import { addPlan } from "../../util/http/peticiones";


const UpDocument = ({ selectedFile,idCliente,plan }) => {
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("documento", selectedFile);
    console.log(selectedFile);
    axios.put(`http://localhost:3001/client/updateDocument/${idCliente}`, formData) // py, java, node
      .then((resp) => {
       alert(JSON.stringify(resp.data));
      })
      .catch((error) => console.log(error));
  };

  const subirPlan=()=>{
      onFileUpload();
      addPlan(plan);
  }

  return (
    <>
      {" "}
      {selectedFile ? (
        <button onClick={subirPlan}> Subir </button>
        
      ) : (
        <button onClick={subirPlan} style={{ background: "gray" }} disabled>
          Subir
        </button>
      )}{" "}
    </>
  );
};

export default UpDocument;
