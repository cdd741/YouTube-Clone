import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "../../components/Button/Button";
import UploadIcon from "../../assets/images/Icons/Icon-upload.svg";
import logo from "../../assets/images/Logo/Logo-brainflix.svg";
import SearchIcon from "./../../assets/images/Icons/Icon-search.svg";
import MohanMuruge from "../../assets/images/ProfilePicture/Mohan-muruge.jpg";

function Header() {
  const uploadBtnContent = (
    <>
      <img
        className="header__upload--image"
        src={UploadIcon}
        alt="upload_icon"
      />
      <h3 className="header__upload--text">UPLOAD</h3>
    </>
  );

  return (
    <nav className="header">
      <Link className="header__logo" to="/">
        <img className="header__logo-img" src={logo} alt="brainflix_logo" />
      </Link>
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
          <Link to="/upload" className="header__upload-link">
            <Button className="header__upload" content={uploadBtnContent} />
          </Link>
          <img
            className="header__profile-picture"
            src={MohanMuruge}
            alt="profile_picture"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
