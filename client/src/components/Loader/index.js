import React from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress } from "@material-ui/core";

const Loader = ({ color }) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <CircularProgress color={color} />
    </Grid>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

Loader.defaultProps = {
  color: "secondary"
};

export default Loader;
