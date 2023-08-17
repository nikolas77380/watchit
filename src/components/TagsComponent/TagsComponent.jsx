import { Box, Typography } from "@mui/material";
import React from "react";

const TagsComponent = ({ tagsList }) => {
  return (
    <Box>
      <Typography sx={{ color: "#fff" }}>
        <Box component="span" sx={{ color: "#e50914" }}>
          Tags :
        </Box>{" "}
        {tagsList.join(", ")}
      </Typography>
    </Box>
  );
};

export default TagsComponent;
