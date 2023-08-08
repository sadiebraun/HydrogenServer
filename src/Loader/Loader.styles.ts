import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "@keyframes animateC": {
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    },
    "@keyframes animate": {
      "0%": {
        transform: "rotate(45deg)"
      },
      "100%": {
        transform: "rotate(405deg)"
      }
    }
  },

  ring: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 150,
    height: 150,
    background: "transparent",
    border: "3px solid #3c3c3c",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: 150,
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#fff000",
    letterSpacing: 4,
    textTransform: "uppercase",
    textShadow: "0 0 10px #fff000",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",

    "&:before": {
      content: "''",
      position: "absolute",
      top: -3,
      left: -3,
      width: "100%",
      height: "100%",
      border: "3px solid transparent",
      borderTop: "3px solid #fff000",
      borderRight: "3px solid #fff000",
      borderRadius: "50%",
      animation: "animateC 2s linear infinite"
    },

    "& > span": {
      display: "block",
      position: "absolute",
      top: "calc(50% - 2px)",
      left: "50%",
      width: "50%",
      height: 4,
      background: "transparent",
      transformOrigin: "left",
      animation: "animate 2s linear infinite",

      "&:before": {
        content: "''",
        position: "absolute",
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "#fff000",
        top: -6,
        right: -8,
        boxShadow: "0 0 20px #fff000"
      }
    }
  }
});

export default useStyles;
