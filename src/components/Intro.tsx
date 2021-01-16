import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "text-align": "center",
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    "text-align": "center",
  },
}));

const Intro: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" className={classes.homeTitle}>
        <Box>Stelios Kotanidis</Box>
        <Typography variant="h6" className={classes.homeContent}>
          <Box>Fullstack Software Engineer</Box>

          <Box>
            Endlessly Curious, Adventurous, Technologist. Always seeking the
            next experience and questioning the norm.
          </Box>
        </Typography>
      </Typography>
    </Box>
  );
};

export default Intro;
