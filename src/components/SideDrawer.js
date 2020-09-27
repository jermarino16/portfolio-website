import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "80vw",
    height: "100vh",
    zIndex: "1",
    backgroundColor: "orangered",
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawer = () => setShowSideDrawer(!showSideDrawer);

  // const closeSideDrawer = () => setShowSideDrawer(false);

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={toggleSideDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"right"} open={showSideDrawer}>
          I'm the drawer with all of the info
        </Drawer>
      </React.Fragment>
    </div>
  );
}
