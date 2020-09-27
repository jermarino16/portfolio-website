import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//My Components
import SkillsItem from "./SkillsItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#753eaa",
    padding: "1rem",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <Grid item xs={2}>
            hello
          </Grid>
          <Grid item xs={8}>
            <SkillsItem />
          </Grid>
          <Grid item xs={2}>
            hello
          </Grid>
          <Grid item xs={2}>
            hello
          </Grid>
          <Grid item xs={8}>
            <SkillsItem />
          </Grid>
          <Grid item xs={2}>
            hello
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
