import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#c0c0c0",
    padding: "1rem",
    height: "10rem",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            Here's some projects
          </Grid>
          <Grid item xs={12}>
            Nothing is here haha
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
