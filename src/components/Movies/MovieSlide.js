import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import { makeStyles } from "@mui/styles";
import ButtonStyle from "../Button/Button";

import useFetch from "../../hook/useFetch";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "4.7rem",
  },
}));

const MovieSlide = ({ name, type, getType, id }) => {
  const classes = useStyles({});

  const { data } = useFetch(getType, type, id);

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
        <Link to={`/${getType}`} style={{ textDecoration: "none" }}>
          {id ? null : <ButtonStyle name="View More" largeBtn="false" />}
        </Link>
      </Stack>
      <Swiper
        spaceBetween={70}
        breakpoints={{
          // when window width is >= 640px

          320: {
            slidesPerView: 1.7,
          },
          375: {
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 2.15,
          },
          450: {
            slidesPerView: 2.5,
          },
          520: {
            slidesPerView: 2.7,
          },
          600: {
            slidesPerView: 2.9,
          },
          648: {
            slidesPerView: 3,
          },
          732: {
            slidesPerView: 3.2,
          },
          768: {
            slidesPerView: 3.7,
          },
          800: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6.5,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
      >
        {data?.map((movie, index) => {
          return (
            <SwiperSlide key={index} style={{ marginRight: "70px" }}>
              <MovieItem movie={movie} category={getType} largeItem="false" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default React.memo(MovieSlide);
