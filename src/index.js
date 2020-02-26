import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6D68B9',
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none'
    },
  }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);
