import React, { useState, useEffect } from "react";
import MoviesGird from "../../components/MoviesGrid/MoviesGird";
import { makeStyles } from "@mui/styles";
import FooterBg from "../../assets/footer-bg.jpg";
import { Container, Stack, Typography } from "@mui/material";
import ButtonStyle from "../../components/Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import tmdbApi from "../../api/tmdbApi";

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2rem",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "2rem",
    },
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
    [theme.breakpoints.down("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  searchBtn: {
    position: "absolute",
    top: "0",
    right: "0",
  },
}));

const MoviesCategory = () => {
  const classes = useStyles({});
  const { category, keyword } = useParams();
  const [pages, setPages] = useState(1);
  const [searchMovies, setSearchMovies] = useState();
  const { data, loading, setData } = useFetch(
    category,
    category === "movie" ? "upcoming" : "top_rated",
    null
  );
  const [keyWords, setKeyWords] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const getMovieSearch = async () => {
      let response = null;
      const params = {
        query: keyword,
        page: pages,
      };
      const res = await tmdbApi.search(category, { params });
      setSearchMovies(res.results);
    };
    if (keyword !== undefined) {
      getMovieSearch();
    }
  }, [keyword]);

  const loadMore = () => {
    setPages((prev) => prev + 1);
  };

  const getMore = async () => {
    let res = null;

    if (category === "movie" && keyword === undefined) {
      const params = {
        page: pages + 1,
      };
      res = await tmdbApi.getMoviesList("upcoming", { params });
      setData([...data, res.results].flat());
    } else if (category === "tv" && keyword === undefined) {
      const params = {
        page: pages + 1,
      };
      res = await tmdbApi.getTvList("top_rated", { params });
      setData([...data, res.results].flat());
    } else if (keyword !== undefined) {
      const params = {
        page: pages + 1,
        query: keyword,
      };
      res = await tmdbApi.search(category, { params });
      setSearchMovies([...searchMovies, res.results].flat());
    }
  };

  const handleSearch = () => {
    setKeyWords("");
    if (keyWords !== "") {
      navigate(`/${category}/search/${keyWords}`);
    }
  };

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
                  placeholder="Type something ......."
                  id="search"
                  name="search"
                  className={classes.search}
                  onChange={(e) => setKeyWords(e.target.value)}
                  value={keyWords}
                />
                <div className={classes.searchBtn}>
                  <ButtonStyle
                    name="Search"
                    large="false"
                    handleSearch={handleSearch}
                  />
                </div>
              </div>
            </form>
          </Stack>
          <MoviesGird
            movies={keyword === undefined ? data : searchMovies}
            loading={loading}
            category={category}
            keyWords={keyWords}
          />
        </div>
        <Stack spacing={2} alignItems="center" sx={{ marginTop: "2rem" }}>
          <ButtonStyle
            name="Load More"
            largeBtn="false"
            loadMore={loadMore}
            getMore={getMore}
          />
        </Stack>
      </Container>
    </div>
  );
};

export default MoviesCategory;
