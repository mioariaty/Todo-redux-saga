import React from "react";
import styles from "./style";
import { withStyles, ThemeProvider } from "@material-ui/core";
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme/Theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
