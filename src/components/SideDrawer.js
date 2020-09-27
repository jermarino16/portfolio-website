import React from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

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

  return (
    <div>
      <React.Fragment>
        {
          <SwipeableDrawer
            // className={classes.container}
            anchor={"right"}
            open={props.show}
            // onClose={toggleDrawer(anchor, false)}
            // onOpen={toggleDrawer(anchor, true)}
            onClick={props.onClick}
          ></SwipeableDrawer>
        }
      </React.Fragment>
    </div>
  );
}
