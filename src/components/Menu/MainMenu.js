import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { makeStyles } from "@mui/styles";

import Logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import { Box, Modal } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "0 0 0 0",
  },
  toolBar: {
    backgroundColor: "none",
    border: 0,
    color: "white",
    height: "8rem",
    lineHeight: "8rem",
    fontWeight: "700",
    margin: "0 1rem 0 1rem",
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
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
    color: "white",
    gap: "2rem",
    fontWeight: "700",
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  item: {
    position: "relative",
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    fontSize: "1.5rem",
    fontWeight: "600",
    transition: " all .25s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      height: "3px",
      width: "0",
      backgroundColor: "#ff0000",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "37px",
      transformOrigin: "center",
      transition: " all .25s ease",
    },
    "&:hover": {
      color: "#ff0000",
      cursor: "pointer",
    },
    "&:hover:before": {
      width: "100%",
    },
  },
  menuBar: {
    "&:hover": {
      cursor: "pointer",
      color: "#ff0000",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  modal: {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    display: "flex",
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    gap: "2rem",
  },
}));

function MainMenu() {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setShow(true) : setShow(false);
  });

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: `${show ? "#0f0f0f" : "transparent"}`,
        height: `${show ? "5rem" : "8rem"}`,
        transition: " all .25s ease-in",
      }}
    >
      <Toolbar className={classes.toolBar}>
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

        <div className={classes.link}>
          <Link to="/" className={classes.item}>
            Home
          </Link>
          <a href="#" className={classes.item}>
            Movies
          </a>
          <a href="#" className={classes.item}>
            TV Series
          </a>
        </div>
        <div className={classes.menuBar}>
          <MenuIcon onClick={handleOpen} style={{ fontSize: "2rem" }} />
        </div>
      </Toolbar>
      <div>
        <Modal open={open}>
          <Box className={classes.modal}>
            <div className={classes.linkList}>
              <Link to="/" className={classes.item}>
                Home
              </Link>
              <a href="#" className={classes.item}>
                Movies
              </a>
              <a href="#" className={classes.item}>
                TV Series
              </a>
              <CloseIcon
                style={{
                  color: "white",
                  fontSize: "2rem",
                  "&:hover": { cursor: "poiter" },
                }}
                onClick={handleClose}
              />
            </div>
          </Box>
        </Modal>
      </div>
    </AppBar>
  );
}

export default MainMenu;
