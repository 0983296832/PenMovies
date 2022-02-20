import { Grid } from "@mui/material";
import React from "react";

import MovieItem from "../Movies/MovieItem";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("lg")]: {
      marginRight: "4rem",
    },
  },
}));

const MoviesGird = ({ movies, loading, category }) => {
  const classes = useStyles({});
  return (
    <div className={classes.container}>
      {loading ? null : (
        <Grid container spacing={1}>
          {movies?.map((item, index) => {
            return (
              <Grid item xl={2} lg={2.4} sm={6} md={4} key={index}>
                <MovieItem movie={item} category={category} largeItem="true" />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default MoviesGird;
