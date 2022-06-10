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

const OrangeCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paperStyle}>xs=12 (0pxより大きい時は)</Paper>
    </Grid>
  );
};

export default OrangeCard;
