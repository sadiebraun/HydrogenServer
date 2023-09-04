import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        width: "100vw",
        margin: 0,
        background: "#ffffff",
        height: "100vh",
        fontFamily: "'Rational Semi Bold', Daytona, sans-serif"
      }
    },
    link: {
      cursor: "pointer",
      textDecoration: "underline",
      color: "rgb(20, 20, 20)",

      "&:not(:last-child)": {
        marginRight: "2rem"
      },

      "&:hover": {
        fontWeight: 600,
      }
    },
    activePage: {
      fontWeight: 600,
      pointerEvents: "none",
      textDecoration: "none"
    },
    wrapper: {
      display: "flex",
      height: "100vh",
      flexDirection: "column"
    },
    navWrapper: {
      height: 50,
      verticalAlign: "middle",
      display: "inline-block",
      marginLeft: 30
    },
    nav: {
      zIndex: 1,
      height: "8rem",
      padding: "2rem 2rem 0 2rem",
      position: "sticky",
      background: "#fff",
      top: 0
    },
    content: {
      transform: "rotate(0deg)",
      background: "#ffffff",
      height: "calc(100% - 8rem)",
      padding: "0 2rem 0 2rem"
    },
    imageButton: {
      border: 0,
      background: "none",

      "& > img": {
        cursor: "pointer"
      }
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
