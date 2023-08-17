import { Box, Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#191919",
        padding: "40px 50px 50px",
        color: "#fff",
      }}
    >
      <Grid item container xs={12} md={8}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-start", gap: 10 }}
        >
          <Typography fontSize={"0.75rem"}>Terms of Use</Typography>
          <Typography fontSize={"0.75rem"}>Privacy-Policy</Typography>
          <Typography fontSize={"0.75rem"}>FAQ</Typography>
          <Typography fontSize={"0.75rem"}>Watch List</Typography>
        </Grid>
        <Grid item xs={8} mt={"0.625rem"}>
          <Box component="p" sx={{ fontSize: "0.75rem", lineHeight: "1.5rem" }}>
            © {year} WhatchIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box component="span" fontSize={"0.75rem"}>
          Follow Us:
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
