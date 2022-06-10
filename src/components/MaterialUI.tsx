import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";
import Title from "./atoms/Title";
import OrangeCard from "./atoms/OrangeCard";

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
      <Title />

      <Grid container spacing={1}>
        <OrangeCard />

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
      <Grid
        container
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle2}>
            Flexbox <br />
            https://mui.com/material-ui/react-grid/#main-content
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Demo
          </Grid>
          <Grid item xs={8} />
          <Grid item xs={2}>
            Text
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent="space-around">
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.
          </Grid>
          <Grid item xs={3}>
            Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
