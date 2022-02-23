import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import MovieSlide from "../../components/Movies/MovieSlide";
import { movieType, tvType } from "../../api/tmdbApi";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <MovieSlide name="Trending TV" getType="tv" type={tvType.popular} />
      <MovieSlide name="Top Rated TV" getType="tv" type={tvType.top_rated} />
    </>
  );
};

export default HomePage;
