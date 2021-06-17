import Main from "./containers/Main/Main"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { primaryMain } from "./consts"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: "#D2B859",
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif'
    ].join(','),
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
