import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/tmovie.png";
import FooterBg from "../../assets/footer-bg.jpg";

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: "4rem",
    backgroundImage: `url(.${FooterBg})`,
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
  return (
    <div className={classes.layout}>
      <Container maxWidth="md">
        <Stack>
          <div className={classes.logo}>
            <img src={Logo} atl="Pen Movie" className={classes.imgLogo} />
            <Typography
              variant="h6"
              style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                paddingBottom: "4rem",
              }}
              className={classes.name}
            >
              PenMovie
            </Typography>
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