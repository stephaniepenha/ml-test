import React from "react";

import styles from "./style.module.css";
import { Link } from "@material-ui/core";
import PropTypes from "prop-types";

const Logo = ({ href, src, hasMargin }) => {
  return (
    <Link href={href}>
      <img
        alt="logo"
        className={hasMargin ? styles.logoImage : styles.logoImageNoMargin}
        src={process.env.PUBLIC_URL + src}
      />
    </Link>
  );
};

Logo.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  hasMargin: PropTypes.bool
};

Logo.defaultProps = {
  href: "#",
  src: "/img/Logo_ML.png",
  hasMargin: true
};

export default Logo;
