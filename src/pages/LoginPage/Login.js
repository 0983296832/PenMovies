import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { login } from "../../slice/userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginBtn from "../../assets/login-google.jpg";


const Login = () => {
  let navigate = useNavigate();



  const user = useSelector((state) => state);
  useEffect(() => {
    user.displayName !== "" && navigate("/");
  }, [user.displayName]);
  const dispatch = useDispatch();

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(https://res.cloudinary.com/binh130490/image/upload/v1645531552/footer-bg_pgorra.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Button variant="contained" onClick={() => dispatch(login())}>
        <img src={loginBtn} alt="" width="30px" height="30px" />
        <span style={{ width: "30px" }}></span>
        Login with Google
      </Button>
    </Stack>
    
  );
};

export default Login;
