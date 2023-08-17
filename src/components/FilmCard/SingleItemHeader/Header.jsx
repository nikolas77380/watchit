import React from "react";
import { DEFAULT_IMAGE } from "../../constants/constants";
import { Grid, Typography, Box } from "@mui/material";

const Header = ({
  name = "zombie island",
  image = DEFAULT_IMAGE,
  raiting = "4.5",
  ganre = "drama",
}) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>{name}</Typography>
        <Box> {raiting}</Box>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
};

export default Header;
