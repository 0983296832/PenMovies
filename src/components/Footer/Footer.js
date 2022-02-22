import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/tmovie.png";
import FooterBg from "../../assets/footer-bg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: "4rem",
    // backgroundImage: `url(.${FooterBg})`,
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
    height: "3.5rem",
    width: "auto",
    marginRight: "7px",
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
      display: "none",
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
}));

const Footer = () => {
  const classes = useStyles({}, FooterBg);
  const user = useSelector((state) => state.user);
  return (
    <div
      className={classes.layout}
      style={{ display: `${user.displayName === "" ? "none" : ""}` }}
    >
      <Container maxWidth="md">
        <Stack>
          <div className={classes.logo}>
            <img src={Logo} atl="Pen Movie" className={classes.imgLogo} />
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
          <Grid container>
            <Grid item xs={4}>
              <Stack spacing={2} direction="column">
                <div className={classes.link}>
                  <a href="#" className={classes.item}>
                    Home
                  </a>
                  <a href="#" className={classes.item}>
                    Contact us
                  </a>
                  <a href="#" className={classes.item}>
                    Term of services
                  </a>
                  <a href="#" className={classes.item}>
                    About us
                  </a>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} direction="column">
                <div className={classes.link}>
                  <a href="#" className={classes.item}>
                    Live
                  </a>
                  <a href="#" className={classes.item}>
                    FAQ
                  </a>
                  <a href="#" className={classes.item}>
                    Premium
                  </a>
                  <a href="#" className={classes.item}>
                    Pravacy policy
                  </a>
                </div>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} direction="column">
                <div className={classes.link}>
                  <a href="#" className={classes.item}>
                    You must watch
                  </a>
                  <a href="#" className={classes.item}>
                    Recent release
                  </a>
                  <a href="#" className={classes.item}>
                    Top IMDB
                  </a>
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
