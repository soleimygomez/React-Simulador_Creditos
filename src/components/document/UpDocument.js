import React from "react";
import axios from "axios";

const UpDocument = ({ selectedFile }) => {
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(selectedFile);

    axios.post("http://localhost:8080/subir", formData) // py, java, node
      .then((resp) => {
       let route = "http://localhost:3000/" + resp.data.url;
       let newWindow = window.open(route, "blank");
       
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {" "}
      {selectedFile ? (
        <button onClick={onFileUpload}> Subir </button>
      ) : (
        <button onClick={onFileUpload} style={{ background: "gray" }} disabled>
          Subir
        </button>
      )}{" "}
    </>
  );
};

export default UpDocument;
