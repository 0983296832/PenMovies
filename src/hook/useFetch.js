import { useState, useEffect } from "react";
import tmdbApi from "../api/tmdbApi";

const useFetch = (getType, type, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let response;

  useEffect(() => {
    const getMovies = async () => {
      const params = {};

      try {
        if (getType === "movie" && type !== "similar") {
          response = await tmdbApi.getMoviesList(type, { params });
        } else if (getType === "tv" && type !== "similar") {
          response = await tmdbApi.getTvList(type, { params });
        } else if (type === "similar") {
          response = await tmdbApi.similar(getType, id);
        } else {
          setData([]);
        }
      } catch (e) {
        console.log(e);
      }
      setData(response.results);
      setLoading(false);
    };

    data && getMovies(type);
  }, [getType]);
  return { data, loading, setData };
};

export default useFetch;
