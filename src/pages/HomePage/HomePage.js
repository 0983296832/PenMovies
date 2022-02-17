import React from "react";
import Hero from "../../components/Hero/Hero";
import MovieSlide from "../../components/Movies/MovieSlide";
import {movieType, tvType} from '../../api/tmdbApi'

const HomePage = () => {
  return (
    <>
      <Hero />
      <MovieSlide
        name="Trending Movies"
        getType="movie"
        type={movieType.popular}
      />
      <MovieSlide
        name="Top Rated Movies"
        getType="movie"
        type={movieType.top_rated}
      />
      <MovieSlide name="Trending TV" getType="tvList" type={tvType.popular} />
      <MovieSlide
        name="Top Rated TV"
        getType="tvList"
        type={tvType.top_rated}
      />
    </>
  );
};

export default HomePage;
