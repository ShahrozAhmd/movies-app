import React from "react";
import { Container, Grid } from "@material-ui/core";


const Body = (props) => {
  return (
    <Container maxWidth="lg" >
      <Grid spacing={3} container>
        {props.children}
      </Grid>
    </Container>
  );
};

export default Body;
