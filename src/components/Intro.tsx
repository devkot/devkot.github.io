import React from "react";

import { Typography, Box, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import roads from "../images/roads.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
    height: "100vh", // TODO - Change this
    backgroundImage: `url(${roads})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  homeTitle: {
    fontWeight: 800,
    textAlign: "center",
    color: theme.palette.primary.main,
    paddingBottom: theme.spacing(2),
  },
  homeContent: {
    fontWeight: 100,
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  boxText: {
    textAlign: "left",
    paddingBottom: theme.spacing(2),
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer} id="page-top">
      <Container>
        <Typography variant="h4">
          <Box className={classes.homeTitle}>WhoAmI (animation here)</Box>
        </Typography>
        <Typography variant="h6" className={classes.homeContent}>
          <Box className={classes.boxText}>
            Hi, I'm Stelios! This is a space for me to present my professional
            and personal interests and also spill my thoughts. I'm passionate
            about Software Engineering, traveling, photography and pushing my
            curiosity's limits.
          </Box>
          <Box className={classes.boxText}>
            This project is a result of a goal I had in 2020, to create a
            portfolio website to display my coding projects, and to create a
            personal website where I could post about all kinds of things I find
            fascinating. As such, this website kind of blends the personal and
            the professional as I believe they're an interweaved aspect of our
            lives.
          </Box>
          <Box className={classes.boxText}>
            Generally, I have quite a diverse set of interests, so I hope you
            can get something out of this, be it getting to know me or simply
            hearing what I'm currently up to!
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
