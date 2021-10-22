import React, { useState } from "react";

import FileData from "./FileData";
import Upload from "./Upload";
import UpDocument from "./UpDocument";


const Main = ({idCliente,plan}) => {
  // const [state, setState] = useState({
  //   monto: 0,
  //   payWay: [],
  //   term: [],
  //   interes: 0.0,
  // });

  const [selectedFile, setSelectedFile] = useState(null);
  //   const [ext, setExt] = useState("");
  console.log(idCliente);
  return (
    <div>
      {/* TODO: Plan de pago detalles */}
      {/* <div>
        <Form state={state} setState={setState} />
      </div> */}

      <Upload setSelectedFile={setSelectedFile} />
      <FileData selectedFile={selectedFile} />
      <UpDocument selectedFile={selectedFile} idCliente={idCliente} plan={plan}/>
    </div>
  );
  
};

export default Main;
