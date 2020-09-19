import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#c0c0c0",
    padding: "1rem",
  },
  avatar: {
    height: "12rem",
    width: "12rem",
  },
  name: {
    paddingTop: ".8rem",
  },
  position: {
    paddingTop: ".4rem",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction='column'
          alignItems='center'
          alignContent='center'
          className={classes.container}
        >
          <Grid item xs={12}>
            <Avatar
              alt='Jeremy Marino'
              src='https://images.unsplash.com/photo-1600514736899-91b7316d069c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.name} variant='h4'>
              Jeremy Marino
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.position} variant='subtitle1'>
              Full-Stack Software Engineer
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
