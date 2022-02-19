import { Grid } from "@mui/material";
import React from "react";
import useFetch from "../../hook/useFetch";
import MovieItem from "../Movies/MovieItem";

const MoviesGird = ({ category, type }) => {
  const { data, loading } = useFetch(category, type);
  console.log(category, type);

  return (
    <>
      {loading ? null : (
        <Grid container spacing={1}>
          {data.map((item, index) => {
            return (
              <Grid item xs={2.4} key={index}>
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
