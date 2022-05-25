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

const MaterialUI: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
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

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
            xs=12 (0pxより大きい時は)
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle}>xs=6 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperStyle}>xs=6 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>
            xs=12(0pxより大きい時は) <br />
            md=6(900pxより小さい時は)
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>
            xs=12(0pxより大きい時は) <br />
            md=6(900pxより小さい時は)
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}>xs=3 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}>xs=3 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}>xs=3 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperStyle}>xs=3 (0pxより大きい時は)</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>
            xs=6(0pxより大きい時は) <br />
            md=3(960pxより小さい時は)
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>
            xs=12(0pxより大きい時は) <br />
            md=6(900pxより小さい時は)
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>
            xs=12(0pxより大きい時は) <br />
            md=6(900pxより小さいは時は)
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>
            xs=12(0pxより大きい時は) <br />
            md=6(900pxより小さい時は)
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle2}>
            Default breakpoints <br />
            Each breakpoint (a key) matches with a fixed screen width (a value)
            <br />
            <br />
            xs, extra-small: 0px <br />
            sm, small: 600px <br />
            md,medium: 900px <br />
            lg, large: 1200px <br />
            xl, extra-large: 1536px
          </Paper>
        </Grid>
      </Grid>
      <Button
        className={classes.btnStyle}
        variant="contained"
        color="secondary"
      >
        TEST BUTTON
      </Button>
    </div>
  );
};

export default MaterialUI;
