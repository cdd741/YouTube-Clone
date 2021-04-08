import React from "react";
import "./Upload.scss";
import Button from "../../Snippets/Button/Button";
import UploadIcon from "../../../assets/images/Icons/Icon-upload.svg";

export default function Upload() {
  let content = (
    <>
      <img
        className="header__upload--image"
        src={UploadIcon}
        alt="upload_icon"
      />
      <h3 className="header__upload--text">UPLOAD</h3>
    </>
  );

  return <Button className="header__upload" content={content} />;
}
