import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
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
