import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import tmdbApi from "../../api/tmdbApi";
import { makeStyles } from "@mui/styles";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "7rem",
  },
  trailer: {
    border: "2px solid #000",
  },
}));

const Trailer = ({ category, id }) => {
  const classes = useStyles({});
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      const videos = await tmdbApi.getVideos(category, id);
      setVideo(videos.results.slice(0, 5));
      setLoading(false);
    };
    getVideos();
  }, [category, id]);

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.container}>
          <PacmanLoader
            color="#50E3C2"
            // loading={loading}
            css={override}
            size={20}
          />
        </div>
      ) : (
        <>
          <Container maxWidth="xl">
            {videos?.map((video, index) => {
              return (
                <div key={index} style={{ marginBottom: "3rem" }}>
                  <Typography variant="h4" gutterBottom>
                    {video.name}
                  </Typography>
                  <div className={classes.trailer}>
                    <iframe
                      width="100%"
                      height="600px"
                      title="trailer"
                      src={`https://www.youtube.com/embed/${video.key}`}
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </Container>
        </>
      )}
    </div>
  );
};

export default Trailer;
