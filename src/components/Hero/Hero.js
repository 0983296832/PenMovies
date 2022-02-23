import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import tmdbApi, { movieType } from "../../api/tmdbApi";

import { makeStyles } from "@mui/styles";
import HeroItem from "./HeroItem";

const useStyles = makeStyles((theme) => ({}));

function Hero() {
  SwiperCore.use([Autoplay]);
  const classes = useStyles({});
  const [moviesPopular, setMoviesPopular] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMoviesPopular(response.results.slice(1, 4));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        className={classes.container}
      >
        {moviesPopular?.map((movie) => {
          return (
            <SwiperSlide key={movie.id} style={{ height: "auto" }}>
              <HeroItem movie={movie} />;
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
