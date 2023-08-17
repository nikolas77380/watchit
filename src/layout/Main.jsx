import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <div className="App">
      <Navigation />
      <Grid
        container
        sx={{
          marginTop: "1.25rem",
          minHeight: "100vh",
          marginBottom: "100px",
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </div>
  );
}

export default Main;
