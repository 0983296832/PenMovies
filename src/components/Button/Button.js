import Button from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

const CustomButtonRed = styled(Button)({
  border: "4px solid transparent",
  backgroundColor: "#ff0000",
  color: "#fff",
  borderRadius: "30px",
  padding: "0.5rem 1.8rem",
  fontSize: "1.5rem",
  fontWeight: "600",
  boxShadow: "0px 0px 7px 8px #ff00004d",
  transition: "box-shadow 0.3s ease",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#ff0000",
    boxShadow: "0px 0px 7px 15px #ff00004d;",
  },
});

const CustomButtonBorder = styled(Button)((props) => ({
  border: `${props.large === "true" ? "4px solid #fff" : "2px solid #fff"}`,
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "30px",
  padding: `${props.large === "true" ? "0.5rem 1.8rem" : "0.25rem 1rem"}`,
  fontSize: `${props.large === "true" ? "1.5rem" : "1rem"}`,
  fontWeight: "600",
  transition: "all 0.3s ease",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#ff0000",
  },
}));

function ButtonStyle({ name, styleBtn, handleOpen, largeBtn, id, category }) {
  console.log(id);
  if (name === "Watch Now") {
    return (
      <Link to={`/detail/movie/${id}`} style={{ textDecoration: "none" }}>
        <CustomButtonRed>{name}</CustomButtonRed>
      </Link>
    );
  } else if (styleBtn) {
    return (
      <Link to={`/detail/${category}/${id}`} style={{ textDecoration: "none" }}>
        <CustomButtonRed>
          <PlayArrowIcon />
        </CustomButtonRed>
      </Link>
    );
  } else {
    return (
      <CustomButtonBorder onClick={handleOpen} large={largeBtn}>
        {name}
      </CustomButtonBorder>
    );
  }
}

export default ButtonStyle;
