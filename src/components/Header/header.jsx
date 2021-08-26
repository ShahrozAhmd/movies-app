import React from "react";
import { useStyles } from "./styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styling.module.css";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            GOK Streaming
          </Typography>
          <Button color="inherit">
            <Link to="/home" className={styles.menuItem}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/movies" className={styles.menuItem}>
              Movies
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/series" className={styles.menuItem}>
              Series
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
