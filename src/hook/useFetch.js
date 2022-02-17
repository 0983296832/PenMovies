import { useState, useEffect } from "react";
import tmdbApi from "../api/tmdbApi";

const useFetch = (getType, type) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      try {
        if (getType === "movie") {
          const response = await tmdbApi.getMoviesList(type, { params });
          setData(response.results);
        } else if (getType === "tvList") {
          const response = await tmdbApi.getTvList(type, { params });
          setData(response.results);
        } else {
          setData([]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    data && getMovies(type);
  }, []);
  return { data };
};

export default useFetch;
