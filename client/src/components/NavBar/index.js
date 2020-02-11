import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import styles from "./style.module.css";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function NavBar() {
  return (
    <div className={styles.root}>
      <AppBar position="static" color={"primary"} className={styles.appBar}>
        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Logo href={"/"} />
            <SearchBar />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
