import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import { makeStyles } from "@mui/styles";
import ButtonStyle from "../Button/Button";

import useFetch from "../../hook/useFetch";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "4.7rem",
  },
}));

const MovieSlide = ({ name, type, getType }) => {
  const classes = useStyles({});
  const [filmType, setFilmType] = useState("");

  useEffect(() => {
    if (getType === "movie") setFilmType("movie");
    if (getType === "tvList") setFilmType("tv");
  }, []);
  console.log(filmType);

  const { data } = useFetch(getType, type);

  return (
    <Container className={classes.container} maxWidth="xl">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingBottom: "20px" }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", fontStyle: "Montserrat" }}
        >
          {name}
        </Typography>
        <ButtonStyle name="View More" largeBtn="false" />
      </Stack>
      <Swiper
        spaceBetween={70}
        slidesPerView={6.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((movie, index) => {
          return (
            <SwiperSlide key={index} style={{ marginRight: "70px" }}>
              <MovieItem movie={movie} category={filmType} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default MovieSlide;
