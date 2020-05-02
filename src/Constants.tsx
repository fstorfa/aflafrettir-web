import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = "#77CCDD";
const theme = createMuiTheme({
  palette: {
      primary: {
          main: primaryColor,
      },
  },
});

export default theme
