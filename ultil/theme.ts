// import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// export const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#3a2665",
    },
    secondary: {
      main: "#3a2665",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h3: {
      fontSize: "2rem",
    },
  },
  // components: {
  //   MuiContainer: {
  //     defaultProps: {
  //       maxWidth: "md",
  //     },
  //     styleOverrides: {
  //       maxWidthSm: {
  //         maxWidth: "680px",
  //         "@media (min-width: 600px": { maxWidth: "680px" },
  //       },
  //       maxWidthMd: {
  //         maxWidth: "1200px",
  //         "@media (min-width: 1400px": { maxWidth: "1200px" },
  //       },
  //     },
  //   },
  // },
});
theme = responsiveFontSizes(theme);
// theme.typography.h3 = {
//   fontSize: "2rem",
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };
export default theme;
