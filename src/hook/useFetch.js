import { useState, useEffect } from "react";
import tmdbApi from "../api/tmdbApi";

const useFetch = (getType, type, id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      try {
        if (getType === "movie" && type !== "similar") {
          const response = await tmdbApi.getMoviesList(type, { params });
          setData(response.results);
        } else if (getType === "tvList" && type !== "similar") {
          const response = await tmdbApi.getTvList(type, { params });
          setData(response.results);
        } else if (type === "similar") {
          const response = await tmdbApi.similar(getType, id);
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
