import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import LocalCafeTwoToneIcon from "@material-ui/icons/LocalCafeTwoTone";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "42px",
    // Posicionamento do footer na parte inferior da página
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
  text: {
    width: "100%",
  },
  link: {
    color: theme.palette.secondary.light,
    textDecoration: "none", // tira o sublinhado do link
    "&:hover": {
      // mouse sobre o link
      textDecoration: "underline", // retorna o sublinhado
    },
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
            Desenvolvido por{" "}
            <a
              className={classes.link}
              href="mailto:professor@faustocintra.com.br"
            >
              Raul Paes
            </a>{" "}
            com muito <LocalCafeTwoToneIcon fontSize="small" />
          </p>
        </Typography>
      </Toolbar>
    </div>
  );
}
