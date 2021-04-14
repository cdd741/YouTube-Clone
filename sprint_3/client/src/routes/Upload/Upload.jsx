import React, { Component } from "react";
import axios from "axios";
import { videoPostRequestApi } from "../../utils/brainflixApi";
import "./Upload.scss";
import Button from "../../components/Button/Button";
import uploadImg from "../../assets/images/Upload/Upload-video-preview.jpg";

class Upload extends Component {
  state = {
    title: "",
    description: "",
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post(videoPostRequestApi(), {
        title: this.state.title,
        description: this.state.description,
      })
      .then(() => {
        alert("Upload completed, going to home page.😊");
        this.props.history.push("/");
      });
  };

  handleCancelClick = (e) => {
    e.preventDefault();
    alert("Upload canceled, going back to previous page.😊");
    this.props.history.goBack();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    document.title = "Upload Video";
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__info" onSubmit={this.handleOnSubmit}>
          <div className="upload__form-container">
            <div className="upload__image-container">
              <h5 className="upload__image-label">VIDEO THUMBNAIL</h5>
              <img
                className="upload__image"
                src={uploadImg}
                alt="upload content"
              />
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
                  onChange={this.handleOnChange}
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
                  id="description"
                  onChange={this.handleOnChange}
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
                onClick={this.handleCancelClick}
              >
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
