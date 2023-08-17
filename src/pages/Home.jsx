import { useEffect, useRef } from "react";
import useRequest from "../hooks/useRequest";
import Grid from "@mui/material/Grid";
import FilmCard from "../components/FilmCard/FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/SearchSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@mui/material";
import "swiper/css";
import { API_BASE_URL, TVMAZE_BASE_URL } from "../constants/constants";
function Home() {
  const apiSearch = useSelector((state) => state.search.search);
  const actionFilms = useRequest(`${API_BASE_URL}/article/byGenre/Action`);
  const crimeFilms = useRequest(`${API_BASE_URL}/article/byGenre/Crime`);
  const apiData = useRequest(
    apiSearch.length >= 3
      ? `${TVMAZE_BASE_URL}/shows?q=${apiSearch}`
      : undefined
  );
  const searchRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <>
      <Grid
        item
        container
        pb={10}
        pt={5}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <input
          type="text"
          style={{
            color: "#fff",
            backgroundColor: "rgba(209,208,207,.6)",
            height: "30px",
            border: "none",
          }}
          value={apiSearch}
          onChange={handleSearch}
          ref={searchRef}
        />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            style={{ color: "#fff", marginLeft: "90px" }}
            variant="h3"
          >
            Action shows
          </Typography>
          <Swiper
            style={{ margin: "40px 100px" }}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {actionFilms?.map((show, index) => (
              <SwiperSlide key={index}>
                <FilmCard
                  id={show.id}
                  title={show.name}
                  time={show.premiered}
                  image={show.image ? show.image.medium : ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ color: "#fff", marginLeft: "90px" }}
            variant="h3"
          >
            Crime shows
          </Typography>
          <Swiper
            style={{ margin: "40px 100px" }}
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {crimeFilms.map((show, index) => (
              <SwiperSlide key={index}>
                <FilmCard
                  id={show.id}
                  title={show.name}
                  time={show.premiered}
                  image={show.image ? show.image.medium : ""}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {apiData.map((show, index) => (
          <Grid item xs={3} key={index}>
            <FilmCard
              id={show.id}
              title={show.name}
              time={show.premiered}
              image={show.image ? show.image.medium : ""}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
