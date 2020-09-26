import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "80vw",
    height: "100vh",
    zIndex: "1",
    backgroundColor: "orangered",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <React.Fragment>
        {props.show && (
          <div className={classes.container}>testestsetestsetsetset</div>
        )}
      </React.Fragment>
    </div>
  );
}
