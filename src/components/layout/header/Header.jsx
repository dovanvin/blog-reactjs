import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/Auth-context";
import Button from "../../button/Button";
import "./Header.scss";


const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const { userInfo } = useAuth();

  return (
    <header>
      <div className="header-main container">
        <NavLink to="/">
          <img
            src="https://imgs.search.brave.com/DFVj_kxUHr73wtExNJjUbuCg_IlDkSF0aEUP8WSkGTk/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/Z2xDWWkyOHF2UllE/ZVNGWHRlal9nSGFI/YSZwaWQ9QXBp"
            alt=""
            style={{ maxHeight: "8rem" }}
          />
        </NavLink>
        <ul className="menu">
          {menuLinks.map((item, index) => (
            <li className="menu-item" key={index}>
              <a href={item.url} className="menu-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="search blogs ..."
          />
          <span className="search-icon">
            <AiOutlineSearch></AiOutlineSearch>
          </span>
        </div>
        {!userInfo ? (
          <Button type="button" className="btn-header" to="/sign-up">
            Sign Up
          </Button>
        ) : (
          <div>{ userInfo?.displayName} </div>
        )}
      </div>
    </header>
  );
};

export default Header;
