import { makeStyles } from "@mui/styles";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useRef, useEffect, useState } from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const useStyles = makeStyles((them) => ({
  baner: {
    width: "100%",
    height: "50vh",
    // backgroundImage:
    //   'url("https://image.tmdb.org/t/p/original//1Wlwnhn5sXUIwlxpJgWszT622PS.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
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

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      bg.current.style.backgroundImage = `url("https://image.tmdb.org/t/p/original${response.backdrop_path}")`;
      setMovie(response);

      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      <div className={classes.baner} ref={bg}></div>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={10}>
          <Grid item xs={4} style={{ zIndex: "10" }}>
            <div className={classes.imageContain}>
              <img
                src={movie ? apiConfig.originalImage(movie.poster_path) : ""}
                className={classes.img}
                alt="The King's Man"
              />
            </div>
          </Grid>

          <Grid item xs={8} className={classes.gridItemLeft} p={2}>
            <Typography
              variant="h1"
              className={classes.title}
              gutterBottom
              sx={{ fontWeight: 700, fontSize: "4.1rem" }}
            >
              {movie ? movie.original_title : null}
              hi
            </Typography>
            <Stack spacing={2} direction="row" sx={{ paddingBottom: "2rem" }}>
              <CustomButtonBorder>action</CustomButtonBorder>
              <CustomButtonBorder>action</CustomButtonBorder>
              <CustomButtonBorder>action</CustomButtonBorder>
              <CustomButtonBorder>action</CustomButtonBorder>
            </Stack>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: 400,
                paddingBottom: "2rem",
                fontFamily: "Montserrat",
              }}
              className={classes.overview}
            >
              {movie ? movie.overview : null}
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <div className={classes.castcontainer}>
                <img
                  src="https://image.tmdb.org/t/p/w500//i8CQIAEAjkieDIA88b4gh122h8s.jpg"
                  alt=""
                  width="96px"
                  style={{ marginBottom: "15px" }}
                />
                <Typography variant="p">Piter pen</Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailContainer;
