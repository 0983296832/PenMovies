import React from "react";
import { useParams } from "react-router-dom";

import DetailContainer from "../../components/DetailContainer/DetailContainer";
import Trailer from "../../components/Trailer/Trailer";
import MovieSlide from "../../components/Movies/MovieSlide";

const MovieDetail = () => {
  const { category, id } = useParams();

  return (
    <div>
      <DetailContainer category={category} id={id} />
      <Trailer category={category} id={id} />
      <MovieSlide name="Similar" getType={category} id={id} type="similar" />
    </div>
  );
};

export default MovieDetail;
