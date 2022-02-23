import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import apiConfig from "../../api/apiConfig";
import { makeStyles } from "@mui/styles";
import ButtonStyle from "../Button/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";

import tmdbApi, { category } from "../../api/tmdbApi";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    padding: "9rem 0",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: "1 ",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100px",
      backgroundImage: "linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0))",
    },
  },
  gridItemLeft: {
    zIndex: "10",
    [theme.breakpoints.down("lg")]: {
      width: "80vw",
    },
  },
  title: {
    fontWeight: "700",
    fontSize: "4.5rem",
    color: "white",
  },
  overview: {
    color: "white",
  },
  imageContain: {
    width: "400px",
    marginLeft: "2rem",
    display: "block",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    borderRadius: "30px",
  },
  trailer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #000",
    p: 4,

    width: "900px",
    height: "500px",
    [theme.breakpoints.between("md", "mg")]: {
      width: "600px",
      height: "400px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "500px",
      height: "400px",
    },
    [theme.breakpoints.between("xm", "sm")]: {
      width: "400px",
      height: "300px",
    },
    [theme.breakpoints.between("xs", "xm")]: {
      width: "300px",
      height: "200px",
    },
  },
}));

const HeroItem = ({ movie }) => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState();
  const bgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const getVideos = async () => {
      const videos = await tmdbApi.getVideos(category.movie, movie.id);
      setVideo(videos.results[0]?.key);
    };
    getVideos();
    bgRef.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`;
  }, [movie.id, movie.backdrop_path]);

  return (
    <div className={classes.container} ref={bgRef}>
      <Container maxWidth="xl" ref={containerRef}>
        <Grid container spacing={6}>
          <Grid
            item
            lg={6}
            className={classes.gridItemLeft}
            p={2}
            sm={8}
            md={8}
          >
            <Slide
              direction="down"
              in={true}
              container={containerRef.current}
              {...(true ? { timeout: 700 } : {})}
            >
              <Typography
                variant="h1"
                className={classes.title}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  marginTop: "5rem",
                  fontFamily: "Montserrat",
                }}
                fontSize={{
                  xl: 130,
                  lg: 100,
                  md: 100,
                  sm: 70,
                  xs: 50,
                }}
              >
                {movie.original_title}
              </Typography>
            </Slide>
            <Slide
              direction="down"
              in={true}
              container={containerRef.current}
              {...(true ? { timeout: 700 } : {})}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  paddingBottom: "2rem",
                  fontFamily: "Montserrat",
                }}
                fontSize={{
                  xl: 20,
                  lg: 20,
                  md: 20,
                  sm: 17,
                  xs: 15,
                }}
                className={classes.overview}
              >
                {movie.overview}
              </Typography>
            </Slide>
            <Slide
              direction="down"
              in={true}
              container={containerRef.current}
              {...(true ? { timeout: 700 } : {})}
            >
              <Stack spacing={2} direction="row">
                <ButtonStyle name="Watch Now" id={movie.id} largeBtn="true" />
                <ButtonStyle
                  name="Watch Trailer"
                  handleOpen={handleOpen}
                  largeBtn="true"
                />
              </Stack>
            </Slide>
          </Grid>
          <Grid item lg={6} style={{ zIndex: "10" }}>
            <Grow in={true} {...(true ? { timeout: 700 } : {})}>
              <div className={classes.imageContain}>
                <img
                  src={apiConfig.originalImage(movie.poster_path)}
                  className={classes.img}
                  alt={movie.original_title}
                />
              </div>
            </Grow>
          </Grid>
        </Grid>
      </Container>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.trailer}>
              <iframe
                title="trailer"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video}`}
              ></iframe>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default HeroItem;
