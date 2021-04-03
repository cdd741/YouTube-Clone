import React from "react";
import "./Upload.scss";
import Button from "../../Snippets/Button/Button";
import UploadIcon from "../../../assets/images/Icons/Icon-upload.svg";

export default function Upload() {
  let content = (
    <>
      <img src={UploadIcon} alt="upload_icon" />
      <h2>UPLOAD</h2>
    </>
  );

  return <Button className="header__upload" content={content} />;
}
