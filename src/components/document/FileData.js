import React from "react";

const FileData = ({ selectedFile }) => {
  return (
    <>
      {selectedFile && (
        <div>
          <h2>File Details:</h2>
          <p>
            <strong> File Name: </strong>
            {selectedFile.name}
          </p>
          <p>
            <strong>File Type: </strong>
            {selectedFile.type}
          </p>
        </div>
      )}
    </>
  );
};

export default FileData;
