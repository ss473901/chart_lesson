import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
  paperStyle2: {
    background: "orange",
    height: "150px",
    textAlign: "left",
  },
});

const Title: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        Hello UIHello UIHello UIHello UIHello UIHello UI
      </Typography>
    </>
  );
};

export default Title;
