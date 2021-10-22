import React, { useRef } from "react";

const Upload = ({ setSelectedFile }) => {
  const hiddenFileInput = useRef(null);

  const handleChoose = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    setSelectedFile(() => fileUploaded);
  };

  return (
    <>
      <h1>Cargue de documento</h1>
      <div style={{ display: "grid" }}>
        <label htmlFor="File">Click Here!</label>
        <button onClick={handleChoose}> Escoger archivo </button>
        <input
          style={{ display: "none" }}
          type="file"
          name="documento"
          ref={hiddenFileInput}
          onChange={handleChange}
          enctype="multipart/form-data"
        />
      </div>
    </>
  );
};

export default Upload;
