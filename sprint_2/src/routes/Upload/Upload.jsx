import React from "react";
import "./Upload.scss";
import Button from "../../components/Button/Button";
import uploadImg from "../../assets/images/Upload/Upload-video-preview.jpg";

function Upload(props) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Upload completed, going to home page.😊");
    props.history.push("/");
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    alert("Upload canceled, going back to previous page.😊");
    props.history.goBack();
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <form className="upload__info" onSubmit={handleOnSubmit}>
        <div className="upload__form-container">
          <div className="upload__image-container">
            <h5 className="upload__image-label">VIDEO THUMBNAIL</h5>
            <img className="upload__image" src={uploadImg} alt="upload image" />
          </div>
          <div className="upload__form">
            <label
              className="upload__input-container upload__input-container--title"
              htmlFor="title"
            >
              <h5 className="upload__input-label">TITLE YOUR VIDEO</h5>
              <input
                required
                className="upload__input upload__input--title"
                placeholder="Add a title to your video"
                type="text"
                name="title"
                id="title"
              />
            </label>
            <label
              className="upload__input-container upload__input-container--description"
              htmlFor="description"
            >
              <h5 className="upload__input-label">ADD A VIDEO DESCRIPTION</h5>
              <textarea
                required
                className="upload__input upload__input--description"
                placeholder="Add a description of your video"
                name="description"
                name="description"
                id="description"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="upload__buttons">
          <Button
            className="upload__button upload__button--publish"
            content="PUBLISH"
            type="submit"
          />
          <div className="upload__button-container">
            <button
              className="upload__button upload__button--cancel pointer"
              onClick={handleCancelClick}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;
