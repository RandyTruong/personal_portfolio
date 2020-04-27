import React, { useMemo } from "react";
import "../styles/header.css";
import {navLinks} from '../utils/const'

const networkFactory = (social) => {
  return social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));
};

const navLinkFactory = () => {
  return navLinks.map((link) => (
    <li key={link.label}>
      <a className="smoothscroll" href={link.href}>
        {link.label}
      </a>
    </li>
  ));
};

const Header = ({
  name = "NAME",
  city = "CITY",
  occupation = "JOB",
  description = "DESCRIPTION",
  social = [],
}) => {

  const networks = useMemo(() => networkFactory(social), [social]);
  const navs = useMemo(() => navLinkFactory(),[navLinks])


  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          {navs}
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
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
