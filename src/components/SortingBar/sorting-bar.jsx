import React from "react";
import { IconButton, Box } from "@material-ui/core";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import styles from "./styling.module.css";

const SortingBar = ({ sort }) => {
  return (
    <Box display="flex" justifyContent="flex-end" className={styles.bar}>
      <Box>
        <IconButton
          onClick={() => {
            sort("sort-by-title");
          }}
        >
          <SortByAlphaIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton
          onClick={() => {
            sort("sort-by-year");
          }}
        >
          <FormatListNumberedRtlIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SortingBar;
