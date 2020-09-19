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

export default function Education() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container} spacing={24}>
          <Grid item xs={12}>
            My Education
          </Grid>
          <Grid item xs={12}>
            I got good grades
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
