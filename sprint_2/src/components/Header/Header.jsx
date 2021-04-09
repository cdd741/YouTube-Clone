import React, { Component } from "react";
import "./Header.scss";
import Button from "../Button/Button";
import UploadIcon from "../../assets/images/Icons/Icon-upload.svg";
import logo from "../../assets/images/Logo/Logo-brainflix.svg";
import SearchIcon from "./../../assets/images/Icons/Icon-search.svg";
import MohanMuruge from "../../assets/images/ProfilePicture/Mohan-muruge.jpg";

class Header extends Component {
  uploadBtnContent = (
    <>
      <img
        className="header__upload--image"
        src={UploadIcon}
        alt="upload_icon"
      />
      <h3 className="header__upload--text">UPLOAD</h3>
    </>
  );

  render() {
    return (
      <div className="header">
        <a className="header__logo" href="../../../../public/index.html">
          <img className="header__logo-img" src={logo} alt="brainflix_logo" />
        </a>
        <div className="header__container">
          <form
            className="header__search-bar"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button className="header__submit-btn pointer" type="submit">
              <img
                className="header__submit-icon"
                src={SearchIcon}
                alt="search_icon"
              />
            </button>
            <input
              className="header__search-input"
              type="text"
              placeholder="Search"
            />
          </form>
          <div className="header__sub-container">
            <Button
              className="header__upload"
              content={this.uploadBtnContent}
            />
            <img
              className="header__profile-picture"
              src={MohanMuruge}
              alt="profile_picture"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
