import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//My Components
import SideDrawer from "./SideDrawer";
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = () => setShowSideDrawer(!showSideDrawer);
  const closeSideDrawerHandler = () => setShowSideDrawer(false);
  const testFunction = () => {
    alert("yoyoyo im clicked");
  };

  return (
    <>
      <SideDrawer show={showSideDrawer} onClick={toggleSideDrawer} />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Jeremy Marino
          </Typography>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleSideDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
