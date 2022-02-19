import React from "react";
import MoviesGird from "../../components/MoviesGrid/MoviesGird";
import { makeStyles } from "@mui/styles";
import FooterBg from "../../assets/footer-bg.jpg";
import { Container, Stack, Typography } from "@mui/material";
import ButtonStyle from "../../components/Button/Button";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((them) => ({
  baner: {
    width: "100%",
    height: "30vh",
    backgroundImage: `url(${FooterBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "absolute",
    zIndex: "-1",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
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
    paddingTop: "8rem",
  },
  searchContainer: {
    position: "relative",
    marginBottom: "2.5rem",
  },
  search: {
    backgroundColor: "#000",
    outline: "none",
    borderRadius: "30px",
    border: "none",
    padding: ".5rem 1.5rem",
    width: "500px",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: "white",
  },
  searchBtn: {
    position: "absolute",
    top: "0",
    right: "0",
  },
}));

const MoviesCategory = () => {
  const classes = useStyles({});
  const { category } = useParams();

  return (
    <div>
      <div className={classes.baner}></div>
      <Container maxWidth="xl">
        <div className={classes.container}>
          <Typography
            variant="h5"
            textAlign="center"
            fontStyle="Montserrat"
            sx={{
              fontWeight: "600",
              marginBottom: "5rem",
              textTransform: "capitalize",
            }}
          >
            {category === "movie" ? " movie" : "tv Series"}
          </Typography>
          <Stack direction="row" spacing={2}>
            <form>
              <div className={classes.searchContainer}>
                <input
                  type="text"
                  placeholder="Type somthing ......."
                  id="search"
                  name="search"
                  className={classes.search}
                />
                <div className={classes.searchBtn}>
                  <ButtonStyle name="Search" large="false" />
                </div>
              </div>
            </form>
          </Stack>
          <MoviesGird
            category={category}
            type={category === "movie" ? "upcoming" : "top_rated"}
          />
        </div>
      </Container>
    </div>
  );
};

export default MoviesCategory;
