import React from "react";
import { useStyles } from "./styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
const Cards = ({ image, title, year, type }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {year && type && (
            <Typography variant="body2" color="textSecondary" component="p">
              {year}
              <br />
              {type}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Cards;
