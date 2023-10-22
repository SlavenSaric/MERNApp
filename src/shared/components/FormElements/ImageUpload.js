import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
    const filePicerRef = useRef()
    const [file,setFile] = useState()
    const [preview,setPreview] = useState()
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if(!file){
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreview(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }, [file])

  const pickImageHnadler = () => {
    filePicerRef.current.click()
  }
    const pickedHnadler = (e) => {
        let pickedFile
        let fileIsValid = isValid
        if(e.target.files && e.target.files.length === 1){
            pickedFile = e.target.files[0]
            setFile(pickedFile)
            setIsValid(true)
            fileIsValid = true
        }else{
            setIsValid(false)
            fileIsValid = false
        }
        props.onInput(props.id, pickedFile, fileIsValid)

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
          {preview && <img src={preview} alt="Preview" />}
          {!preview && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHnadler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
