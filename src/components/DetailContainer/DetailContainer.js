import { makeStyles } from "@mui/styles";
import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useRef, useEffect, useState } from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const useStyles = makeStyles((theme) => ({
  baner: {
    width: "100%",
    height: "50vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
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
  container: {
    paddingTop: "10rem",
  },
  gridItemLeft: {
    zIndex: "10",
  },
  title: {
    color: "white",
  },
  overview: {
    color: "white",
  },
  imageContain: {
    width: "400px",
    marginLeft: "2rem",
    objectFit: "cover",
    [theme.breakpoints.down("lg")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    borderRadius: "30px",
  },
  castcontainer: {
    display: "flex",
    flexDirection: "column",
    gap: " 0 0 0 20px",
  },
  castGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    [theme.breakpoints.up("mg")]: {
      gridTemplateColumns: "repeat(5,max-content)",
      gap: "1rem",
    },
    [theme.breakpoints.between("md", "mg")]: {
      gridTemplateColumns: "repeat(4,max-content)",
      gap: "1rem",
    },
    [theme.breakpoints.between("sm", "md")]: {
      gridTemplateColumns: "repeat(5,max-content)",
      gap: "1rem",
    },
    [theme.breakpoints.between("xm", "sm")]: {
      gridTemplateColumns: "repeat(3,max-content)",
      gap: "1rem",
    },
    [theme.breakpoints.between("xs", "xm")]: {
      gridTemplateColumns: "repeat(2,max-content)",
      gap: "1rem",
    },
  },
  genresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(5,max-content)",
      gap: "1rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.between("xm", "sm")]: {
      gridTemplateColumns: "repeat(3,max-content)",
      gap: "1rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.between("xs", "xm")]: {
      gridTemplateColumns: "repeat(2,max-content)",
      gap: "1rem",
    },
  },
}));

const CustomButtonBorder = styled(Button)({
  border: "2px solid #fff",
  backgroundColor: "#0f0f0f",
  color: "#fff",
  borderRadius: "30px",
  fontSize: "1rem",
  padding: "0.2rem 1rem",
  fontWeight: "600",
  transition: "all 0.3s ease",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#0f0f0f",
  },
});

const DetailContainer = ({ category, id }) => {
  const classes = useStyles({});
  const bg = useRef();

  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getDetail = async () => {
      const movieRes = await tmdbApi.detail(category, id, { params: {} });
      const castRes = await tmdbApi.credits(category, id);
      bg.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${movieRes.backdrop_path}")`;
      setMovie(movieRes);
      setCasts(castRes.cast.slice(0, 5));

      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log(true);
    } else {
      console.log(false);
    }
  });

  return (
    <>
      <div className={classes.baner} ref={bg}></div>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={10}>
          <Grid item lg={5} md={5} style={{ zIndex: "10" }}>
            <div className={classes.imageContain}>
              <img
                src={movie ? apiConfig.originalImage(movie.poster_path) : ""}
                className={classes.img}
                alt="The King's Man"
              />
            </div>
          </Grid>

          <Grid item lg={7} md={7} className={classes.gridItemLeft} p={2}>
            <Typography
              variant="h1"
              className={classes.title}
              gutterBottom
              sx={{ fontWeight: 700 }}
              fontSize={{
                xs: 30,
              }}
            >
              {movie ? movie.original_title : null}
            </Typography>
            <div className={classes.genresGrid}>
              {movie
                ? movie?.genres?.map((item, index) => (
                    <div key={index}>
                      <CustomButtonBorder>{item.name}</CustomButtonBorder>
                    </div>
                  ))
                : null}
            </div>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: 400,
                paddingBottom: "2rem",
                fontFamily: "Montserrat",
              }}
              maxWidth={{
                lg: "80%",
                md: "60%",
                xs: "300px",
              }}
              className={classes.overview}
            >
              {movie ? movie.overview : null}
            </Typography>
            <div className={classes.castGrid}>
              {casts?.map((cast, index) => {
                return (
                  <div className={classes.castcontainer} key={cast.id}>
                    <img
                      src={cast ? apiConfig.w500Image(cast.profile_path) : null}
                      alt=""
                      width="96px"
                      style={{ marginBottom: "15px" }}
                    />
                    <Typography
                      variant="p"
                      sx={{ maxWidth: " 96px" }}
                      // fontSize={{
                      //   xs: 10,
                      // }}
                    >
                      {cast ? cast.name : null}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailContainer;
