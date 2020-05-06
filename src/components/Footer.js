import React, { useMemo } from "react";
import "../styles/footer.css";

const networksBuilder = (social) =>
  social.map(({ name, url, className }) => (
    <li key={name}>
      <a href={url}>
        <i className={className}></i>
      </a>
    </li>
  ));

const Footer = ({ social = [] }) => {
  const networkList = useMemo(() => networksBuilder(social), [social]);
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networkList}</ul>

          <ul className="copyright">
            {/* <li>&copy; Copyright</li> */}
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
