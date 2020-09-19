import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#abc123",
    padding: "1rem",
    height: "10rem",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            Im the footer
          </Grid>
          <Grid item xs={12}>
            I have nice links here
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
