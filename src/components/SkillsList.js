import React, { useState } from "react";

//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  const [carouselState, setCarouselState] = useState(0);

  const decrementState = () => {
    if (carouselState == 0) {
      setCarouselState(2);
    } else {
      setCarouselState(carouselState - 1);
    }
  };

  const incrementState = () => {
    if (carouselState == 2) {
      setCarouselState(0);
    } else {
      setCarouselState(carouselState + 1);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <Grid item xs={2}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={decrementState}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            {carouselState === 0 && (
              <SkillsItem title='woohoo' content="I'm building a carousel" />
            )}
            {carouselState === 1 && (
              <SkillsItem title='Yippee' content='seems to be working!' />
            )}
            {carouselState === 2 && (
              <SkillsItem
                title='i figured out state'
                content='now i can run the nation'
              />
            )}
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={incrementState}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
