import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Paper, Divider } from "@material-ui/core";
import styles from "./style.module.css";
import getUrlParameter from "../../utils/get-param";

const SearchBar = () => {
  const [values, setValues] = useState({
    query: getUrlParameter("q")
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const link = _ => {
    return "/items?q=" + values.query;
  };

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      window.location.href = link();
    }
  };

  return (
    <Paper component="div" className={styles.searchForm}>
      <InputBase
        autoFocus
        onKeyDown={handleKeyPress}
        value={values.query}
        onChange={handleChange("query")}
        className={styles.input}
        placeholder="Busque aqui"
        inputProps={{ "aria-label": "search" }}
      />
      <Divider className={styles.divider} orientation="vertical" />
      <IconButton href={link()} className={styles.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
