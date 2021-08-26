import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 300,
    width:"100%",
    backgroundPosition: "center center", /* Center the image */
    backgroundRepeat: "no-repeat", /* Do not repeat the image */
    backgroundSize: "contain"
  },
});
