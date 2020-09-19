import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#753eaa",
    padding: "1rem",
    height: "10rem",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container} spacing={24}>
          <Grid item xs={12}>
            About Me
          </Grid>
          <Grid item xs={12}>
            I'm Pretty cool
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}