import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//My Components
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Contact from "../components/Contact";

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
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </div>
  );
}