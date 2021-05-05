import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { LocalCafeTwoToneIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  text: {
    width: "100%",
  },
}));

export default function FooterBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className="classes.toolbar">
        <Typography
          variant="caption"
          align="center"
          className={classes.toolbar}
        >
          <p>
            Desenvolvido por Raul Paes com muito{" "}
            <LocalCafeTwoToneIcon fontSize="small" />
          </p>
        </Typography>
      </Toolbar>
    </div>
  );
}
