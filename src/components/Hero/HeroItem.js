import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import apiConfig from "../../api/apiConfig";
import { makeStyles } from "@mui/styles";
import ButtonStyle from "../Button/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import tmdbApi, { category } from "../../api/tmdbApi";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    padding: "9rem 0",
    // backgroundImage:
    //   'url("https://image.tmdb.org/t/p/original/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg")',
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
  },
}));

const HeroItem = ({ movie }) => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState();
  const bgRef = useRef(null);

  useEffect(() => {
    const getVideos = async () => {
      const videos = await tmdbApi.getVideos(category.movie, movie.id);
      setVideo(videos.results[0].key);
    };
    getVideos();
    bgRef.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`;
  }, [movie.id, movie.backdrop_path]);

  return (
    <div className={classes.container} ref={bgRef}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={6} className={classes.gridItemLeft} p={2}>
            <Typography
              variant="h1"
              className={classes.title}
              gutterBottom
              sx={{ fontWeight: 700, marginTop: "5rem" }}
            >
              {movie.original_title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 600, paddingBottom: "2rem" }}
              className={classes.overview}
            >
              {movie.overview}
            </Typography>
            <Stack spacing={2} direction="row">
              <ButtonStyle name="Watch Now" id={movie.id} />
              <ButtonStyle
                name="Watch Trailer"
                handleOpen={handleOpen}
                largeBtn="true"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} style={{ zIndex: "10" }}>
            <div className={classes.imageContain}>
              <img
                src={apiConfig.originalImage(movie.poster_path)}
                className={classes.img}
                alt={movie.original_title}
              />
            </div>
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
                width="900px"
                height="500px"
                title="trailer"
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
