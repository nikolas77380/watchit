import { useParams } from "react-router-dom";
import Header from "../components/SingleItemHeader/SingleItemHeader";
import { Grid } from "@mui/material";
import TagsComponent from "../components/TagsComponent/TagsComponent";
import Tabs from "../components/TabsComponent/Tabs";
import useRequest from "../hooks/useRequest";
import { TVMAZE_BASE_URL } from "../constants/constants";
function FilmDetails() {
  const { filmId } = useParams();

  const apiData = useRequest(`${TVMAZE_BASE_URL}/${filmId}`);
  return (
    <Grid container sx={{ margin: "0 100px" }}>
      <Header
        name={apiData.name}
        image={apiData?.image?.medium}
        genres={apiData.genres}
        raiting={apiData.rating?.average}
      />
      <TagsComponent tagsList={apiData?.genres || []} />
      <Grid item container>
        <Tabs value={1} description={apiData.summary} />
      </Grid>
    </Grid>
  );
}

export default FilmDetails;
