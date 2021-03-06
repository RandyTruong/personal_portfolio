import React, { useMemo } from "react";
import { navLinks } from "../utils/const";
import "../styles/header.css";

const networkFactory = (social) =>
  social.map(({ name, url, className }) => (
    <li key={name}>
      <a href={url}>
        <i className={className}></i>
      </a>
    </li>
  ));

const navLinkFactory = () =>
  navLinks.map(({ label, href }) => (
    <li key={label}>
      <a className="smoothscroll" href={href}>
        {label}
      </a>
    </li>
  ));

const Header = ({
  name = "NAME",
  city = "CITY",
  occupation = "JOB",
  description = "DESCRIPTION",
  social = [],
}) => {
  const networks = useMemo(() => networkFactory(social), [social]);
  const navs = useMemo(() => navLinkFactory(), []);

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        {navs && (
          <ul id="nav" className="nav">
            {navs}
          </ul>
        )}
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h3>
            An {city} based <span>{occupation}</span> {description}.
          </h3>
          <hr />
          {networks && <ul className="social">{networks}</ul>}
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
