import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    black: "#262626",
    gray: {
      "50": "#F2F2F2",
      "100": "#DBDBDB",
      "200": "#C4C4C4",
      "300": "#ADADAD",
      "400": "#969696",
      "500": "#808080",
      "600": "#666666",
      "700": "#4D4D4D",
      "800": "#333333",
      "900": "#1A1A1A",
    },
    purple: {
      "50": "#EAEBFB",
      "100": "#C4C6F3",
      "200": "#9EA1EB",
      "300": "#787CE3",
      "400": "#5258DB",
      "500": "#2C33D3",
      "600": "#2429A8",
      "700": "#1B1F7E",
      "800": "#121454",
      "900": "#090A2A",
    },
  },
  fonts: {
    heading: "Canela",
    body: "Mulish",
  },
  breakpoints,
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
      },
    },
  },
  styles: {
    global: {
      ".map-node": {
        fontFamily: "Mulish",
        fontSize: "14px",
        backgroundColor: "rgb(255 255 255)",
        borderRadius: "8px",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "8px",
        paddingBottom: "8px",
        textAlign: "center",
      },
    },
  },
});

export default theme;
