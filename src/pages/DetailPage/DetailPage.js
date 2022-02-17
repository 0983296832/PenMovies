import React from "react";
import { useParams } from "react-router-dom";

import DetailContainer from "../../components/DetailContainer/DetailContainer";

const MovieDetail = () => {
  const { category, id } = useParams();

  return (
    <div>
      <DetailContainer category={category} id={id} />
    </div>
  );
};

export default MovieDetail;
