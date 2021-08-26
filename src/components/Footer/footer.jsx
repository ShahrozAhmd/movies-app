import React from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@material-ui/core";
import styles from "./styling.module.css";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              Copyrights text in middle e.g (© 2020 Geeks of Kolachi. All Rights
              Reserved.)
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
