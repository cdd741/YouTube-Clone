import React from "react";
import "./SearchBar.scss";
import SearchIcon from "./../../../assets/images/Icons/Icon-search.svg";

function SearchBar({ className }) {
  return (
    <form
      className={className}
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
  );
}

export default SearchBar;
