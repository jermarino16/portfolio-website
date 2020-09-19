import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//My Components
import Profile from "../components/Profile";
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
