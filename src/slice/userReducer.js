import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../configFireBase/firebase";
import { toast } from "react-toastify";

export const login = createAsyncThunk("login/getUser", async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  toast.success("🦄 Login successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return result.user;
});
export const logout = createAsyncThunk("logout", () => {
  console.log("logout");
  signOut(auth).then(() => {
    toast.success("🦄 Logout successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "",
    displayName: "",
    email: "",
    photoURL: "",
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.displayName = action.payload?.displayName;
      state.email = action.payload?.email;
      state.photoURL = action.payload?.photoURL;
      state.status = "success";
    },
    [login.rejected]: (state) => {
      state.status = "failed";
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
    },
    [logout.fulfilled]: (state) => {
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
      state.status = "";
    },
  },
});
export default userSlice.reducer;
