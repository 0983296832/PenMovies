import { Typography, Zoom } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ButtonStyle from "../Button/Button";
import apiConfig from "../../api/apiConfig";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "200px",
    height: "auto",
    marginTop: "1rem",
    "&:hover ": {
      "& $name": {
        color: "#ff0000",
      },
    },
  },

  imgcontainer: {
    position: "relative",
    "&:hover ": {
      cursor: "pointer",
      "& $play": {
        display: "block",
      },
      "& $name": {
        color: "#ff0000",
      },
    },
  },
  play: {
    position: "absolute",
    backgroundColor: "rgb(0,0,0,0.8)",
    width: "100%",
    height: "100%",
    top: "0",
    display: "none",
    borderRadius: "28px",
    transition: "all 0.2s linear",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    objectFit: "cover",
    borderRadius: "30px",
    width: "200px",
    height: "300px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  containerLarge: {
    width: "240px",
    height: "auto",
    marginTop: "1rem",
    [theme.breakpoints.down("lg")]: {
      width: "300px",
    },

    [theme.breakpoints.up("sm")]: {
      marginRight: "2rem",
    },
    "&:hover ": {
      "& $name": {
        color: "#ff0000",
      },
    },
  },
  imageLarge: {
    objectFit: "cover",
    borderRadius: "30px",
    width: "240px",
    height: "360px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "400px",
    },
    [theme.breakpoints.down("xl")]: {
      width: "240px",
      height: "360px",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("lg")]: {
      width: "300px",
      height: "400px",
      marginRight: "2rem",
    },

    "&:hover": {
      cursor: "pointer",
    },
  },
  name: {
    "&:hover": {
      color: "#ff0000",
      cursor: "pointer",
    },
  },
}));
const MovieItem = ({ movie, category, largeItem }) => {
  const classes = useStyles({});
  const [check, setCheck] = useState(false);

  return (
    <div
      className={
        largeItem === "true" ? classes.containerLarge : classes.container
      }
    >
      <div
        className={classes.imgcontainer}
        onMouseOver={() => setCheck(true)}
        onMouseOut={() => setCheck(false)}
      >
        <img
          src={apiConfig.originalImage(movie.poster_path)}
          className={largeItem === "true" ? classes.imageLarge : classes.image}
          alt={movie.original_title || movie.name}
        />
        <div className={classes.play}>
          <Zoom in={check}>
            <div className={classes.btn}>
              <ButtonStyle styleBtn="play" id={movie.id} category={category} />
            </div>
          </Zoom>
        </div>
      </div>
      <Typography
        variant="h6"
        className={classes.name}
        sx={{ paddingTop: "10px" }}
      >
        {movie.original_title || movie.name}
      </Typography>
    </div>
  );
};

export default MovieItem;
