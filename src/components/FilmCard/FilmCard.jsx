import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DEFAULT_IMAGE, DEFAULT_TITLE } from "../../constants/constants";
import { Link } from "react-router-dom";

const buttonStyle = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #E50914",
  background: "#E50914",
  width: "100px",
  height: "30px",
  color: "#fff",
  fontSize: "12px",
  borderRadius: 0,
};

export default function FilmCard({
  id,
  title = DEFAULT_TITLE,
  image = DEFAULT_IMAGE,
  time,
}) {
  return (
    <Card
      sx={{
        height: "13.875rem",
        width: "24.6875rem",
        position: "relative",
      }}
    >
      <CardMedia component="img" image={image} alt={title} />
      <Box
        sx={{
          position: "absolute",
          height: "13.875rem",
          width: "24.6875rem",
          top: 0,
          left: 0,
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: 70,
          left: 20,
          color: "#fff",
        }}
      >
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
          <Typography sx={{ fontSize: "18px" }}>{time}</Typography>

          <Link to={`/films/${id}`} style={buttonStyle}>
            Show more
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
