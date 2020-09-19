import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//My Components
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  const [showSidebar, setShowSidebar] = useState(true);

  const openSidebarHandler = () => setShowSidebar(true);
  const closeSidebarHandler = () => setShowSidebar(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
