import React, { useRef } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
    const filePicerRef = useRef()
  const pickImageHnadler = () => {
    filePicerRef.current.click()
  }
    const pickedHnadler = (e) => {
        console.log(e.target);
    }

  
  return (
    <div className="form-control">
      <input
        type="file"
        id={props.id}
        ref={filePicerRef}
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        onChange={pickedHnadler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHnadler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
