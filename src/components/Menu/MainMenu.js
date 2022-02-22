import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slice/userReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      bottom: "45px",
      transformOrigin: "center",
      transition: " all .25s ease",
      [theme.breakpoints.down("md")]: {
        bottom: "-6px",
      },
    },
    "&:hover": {
      color: "#ff0000",
      cursor: "pointer",
    },
    "&:hover:before": {
      width: "100%",
    },
  },
  active: {
    color: "#ff0000",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      height: "3px",
      width: "100%",
      backgroundColor: "#ff0000",
      bottom: "45px",
      left: "50%",
      transform: "translateX(-50%)",
      [theme.breakpoints.down("md")]: {
        bottom: "-6px",
      },
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
  box: {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  modal: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    gap: "2rem",
  },
  close: {
    color: "white",
    fontSize: "4rem",
    cursor: "pointer",
    "&:hover": {
      color: "#ff0000",
    },
  },
}));

function MainMenu() {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const user = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  const [indexActive, setIndexActive] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = (index) => {
    setIndexActive(index);
    setOpen(false);
  };

  const handleLogOut = () => {
    setOpen(false);
    dispatch(logout());
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 150 ? setShow(true) : setShow(false);
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
          <img src={Logo} alt="PenMovie" className={classes.imgLogo} />
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h6"
              style={{
                fontWeight: "700",
                fontFamily: "Montserrat",
              }}
              sx={{
                fontSize: {
                  sm: 40,
                  xs: 25,
                },
              }}
              className={classes.name}
            >
              PenMovie
            </Typography>
          </Link>
        </div>

        <div
          className={classes.link}
          style={{ display: `${user.displayName === "" ? "none" : ""}` }}
        >
          <Link
            to="/"
            className={`${classes.item} ${indexActive === 1 && classes.active}`}
            onClick={() => setIndexActive(1)}
          >
            Home
          </Link>
          <Link
            to="/movie"
            className={`${classes.item} ${indexActive === 2 && classes.active}`}
            onClick={() => setIndexActive(2)}
          >
            Movies
          </Link>
          <Link
            to="/tv"
            className={`${classes.item} ${indexActive === 3 && classes.active}`}
            onClick={() => setIndexActive(3)}
          >
            TV Series
          </Link>
          <Link to="/login" className={classes.item} onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
        <div className={classes.menuBar}>
          <MenuIcon
            onClick={handleOpen}
            style={{
              fontSize: "2rem",
              display: `${user.displayName === "" ? "none" : ""}`,
            }}
          />
        </div>
      </Toolbar>

      <div>
        <Modal open={open} className={classes.modal}>
          <Box className={classes.box}>
            <div className={classes.linkList}>
              <Link
                to="/"
                className={`${classes.item} ${
                  indexActive === 1 && classes.active
                }`}
                onClick={() => handleClose(1)}
              >
                Home
              </Link>
              <Link
                to="/movie"
                className={`${classes.item} ${
                  indexActive === 2 && classes.active
                }`}
                onClick={() => handleClose(1)}
              >
                Movies
              </Link>
              <Link
                to="/tv"
                className={`${classes.item} ${
                  indexActive === 3 && classes.active
                }`}
                onClick={() => handleClose(1)}
              >
                TV Series
              </Link>
              <Link to="/login" className={classes.item} onClick={handleLogOut}>
                Log Out
              </Link>
              <CloseIcon
                className={classes.close}
                style={{ fontSize: "2rem" }}
                onClick={handleClose}
              />
            </div>
          </Box>
        </Modal>
        <ToastContainer />
      </div>
    </AppBar>
  );
}

export default MainMenu;
