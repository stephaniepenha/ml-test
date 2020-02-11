import React from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import styles from "./css/style.module.css";

const theme = createMuiTheme({
  typography: {
    body1: {
      fontSize: 46
    },
    h1: {
      fontSize: 28
    },
    h2: {
      fontSize: 24
    },
    h3: {
      fontSize: 18
    },
    h4: {
      fontSize: 16
    },
    h5: {
      fontSize: 14
    },
    h6: {
      fontSize: 12
    }
  },
  palette: {
    primary: {
      main: "#FFE600"
    },
    secondary: {
      main: "#3483FA"
    },
    background: {
      default: "#EEEEEE"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const App = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div className={styles.app}>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </div>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
