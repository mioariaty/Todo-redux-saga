import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  color: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      main: '#0066ff',
      light: '#0044ff',
      contrastText: '#ffcc00'
    },
    error: {
      main: "#f44336"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: 'Roboto',
  shape: {
    borderRadius: 4,
  },
});
export default theme;
