import { createMuiTheme } from '@material-ui/core/styles';

export const
    primaryColor = "#77CCDD",
    fbBlue ="#3B5998";

const theme = createMuiTheme({
  palette: {
      primary: {
          main: primaryColor,
      },
  },
});

export default theme;
