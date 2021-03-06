import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import penLogo from "../../assets/penLogo.png";
import FooterBg from "../../assets/footer-bg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: "4rem",
    backgroundImage: `url(https://res.cloudinary.com/binh130490/image/upload/v1645531552/footer-bg_pgorra.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "left",
    padding: "9rem 0",
  },
  name: {
    transition: " all .25s ease-in",
    "&:hover": {
      color: "#ff0000",
      cursor: "pointer",
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
  },
  imgLogo: {
    width: "auto",
    height: "4rem",
    marginRight: "7px",
    marginTop: "5px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    gap: "2rem",
    fontWeight: "600",
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  item: {
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    fontSize: "1.3rem",
    fontWeight: "700",
    transition: " all .25s ease",
    "&:hover": {
      color: "#ff0000",
      cursor: "pointer",
    },
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles({}, FooterBg);
  const user = useSelector((state) => state);
  return (
    <div
      className={classes.layout}
      style={{ display: `${user.displayName === "" ? "none" : ""}` }}
    >
      <Container maxWidth="md">
        <Stack>
          <div className={classes.logo}>
            <img src={penLogo} alt="Pen Movie" className={classes.imgLogo} />
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography
                variant="h6"
                style={{
                  fontSize: "2.7rem",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                }}
                className={classes.name}
              >
                PenMovie
              </Typography>
            </Link>
          </div>
          <Grid container style={{ marginTop: "2rem" }}>
            <Grid item md={4} xs={12}>
              <Stack spacing={2} direction="column">
                <div className={classes.link}>
                  <Link to="/" className={classes.item}>
                    Home
                  </Link>
                  <Link to="/" className={classes.item}>
                    Contact us
                  </Link>
                  <Link to="/" className={classes.item}>
                    Term of services
                  </Link>
                  <Link to="/" className={classes.item}>
                    About us
                  </Link>
                </div>
              </Stack>
            </Grid>
            <Grid item md={4} xs={0}>
              <Stack spacing={2} direction="column">
                <div className={classes.display}>
                  <div className={classes.link}>
                    <Link to="/" className={classes.item}>
                      Live
                    </Link>
                    <Link to="/" className={classes.item}>
                      FAQ
                    </Link>
                    <Link to="/" className={classes.item}>
                      Premium
                    </Link>
                    <Link to="/" className={classes.item}>
                      Pravacy policy
                    </Link>
                  </div>
                </div>
              </Stack>
            </Grid>
            <Grid item md={4} xs={0}>
              <Stack spacing={2} direction="column">
                <div className={classes.display}>
                  <div className={classes.link}>
                    <Link to="/" className={classes.item}>
                      You must watch
                    </Link>
                    <Link to="/" className={classes.item}>
                      Recent release
                    </Link>
                    <Link to="/" className={classes.item}>
                      Top IMDB
                    </Link>
                  </div>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
