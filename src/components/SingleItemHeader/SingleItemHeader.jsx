import React from "react";
import { DEFAULT_IMAGE } from "../../constants/constants";
import { Grid, Typography, Box } from "@mui/material";
import Stars from "./Stars";

const Header = ({
  name = "zombie island",
  image = DEFAULT_IMAGE,
  raiting = "4.5",
  genres = ["drama", "action"],
  language = "English",
}) => {
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography
            textTransform={"uppercase"}
            fontSize={"1.5rem"}
            sx={{ color: "#fff" }}
          >
            {name}
          </Typography>
          <Stars raiting={raiting} />
        </Box>
        <Grid item xs={12} md={4}>
          <Typography color="primary" sx={{ textTransform: "capitalize" }}>
            {genres[0]}
          </Typography>
          <Typography color="primary" sx={{ textTransform: "capitalize" }}>
            Language :
            <Box component="span" sx={{ color: "#fff" }}>
              {" "}
              {language}
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} sx={{ position: "relative" }}>
        <Box
          sx={{
            background: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "300px",
            height: "200px",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            height: "200px",
            width: "300px",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
};

export default Header;
