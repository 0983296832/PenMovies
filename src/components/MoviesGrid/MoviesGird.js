import { Grid } from "@mui/material";
import React from "react";

import MovieItem from "../Movies/MovieItem";

const MoviesGird = ({ movies, loading, category }) => {
  return (
    <>
      {loading ? null : (
        <Grid container spacing={1}>
          {movies?.map((item, index) => {
            return (
              <Grid item xl={2} lg={2.4} key={index}>
                <MovieItem movie={item} category={category} largeItem="true" />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default MoviesGird;
