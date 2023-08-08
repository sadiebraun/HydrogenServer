import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        width: "100vw",
        margin: 0,
        background: "rgba(43, 192, 219, 0.3)",
        overflow: "hidden",
        height: "100vh"
      }
    },
    link: {
      cursor: "pointer",
      textDecoration: "underline",

      "&:not(:last-child)": {
        marginRight: "2rem"
      },

      "&:hover": {
        color: "#6500ae"
      }
    },
    activePage: {
      color: "#a44702",
      pointerEvents: "none",
      textDecoration: "none"
    },
    inactivePage: {
      color: "#ff6d00"
    },
    wrapper: {
      display: "flex",
      height: "100vh",
      flexDirection: "column"
    },
    nav: {
      height: "8rem",
      padding: "2rem 2rem 0 2rem"
    },
    content: {
      background: "rgb(252, 240, 231)",
      height: "calc(100% - 8rem)",
      padding: "2rem 2rem 0 2rem"
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
