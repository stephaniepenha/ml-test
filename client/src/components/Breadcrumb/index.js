import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import styles from "./style.module.css";
import PropTypes from "prop-types";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const Breadcrumb = ({ items }) => {
  const BreadcrumbItems = items => {
    return items.map((item, index) => {
      if (index === items.length - 1) {
        return (
          <Typography color="textPrimary" variant={"h5"} key={item.name}>
            {item.name}
          </Typography>
        );
      }
      return (
        <Link color="inherit" href={item.href} key={item.name}>
          <Typography color="textPrimary" variant={"h5"} key={item.name}>
            {item.name}
          </Typography>
        </Link>
      );
    });
  };

  return (
    <div className={styles.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {BreadcrumbItems(items)}
      </Breadcrumbs>
    </div>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array
};

Breadcrumb.defaultProps = {
  items: [
    { name: "nivel 1", href: "/" },
    { name: "nivel 2", href: "/" },
    { name: "nivel 3", href: "/" }
  ]
};

export default Breadcrumb;
