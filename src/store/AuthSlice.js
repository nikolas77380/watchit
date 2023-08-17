import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../constants/constants";

const token = localStorage.getItem("token");

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: "",
    email: "",
    token: token,
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { setToken, setLoading, setUserData } = AuthSlice.actions;

export const handleRegistration = (data) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const request = await axios.post(`${API_BASE_URL}/user`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (request.data.verified) {
      const verifyRequest = await axios.post(
        `${API_BASE_URL}/user/verify-email`,
        {
          verification: request.data.verified,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(
        setUserData({
          fullName: verifyRequest.data.fullName,
          email: verifyRequest.data.email,
        })
      );
      dispatch(setToken(verifyRequest.data.accessToken));
      dispatch(setLoading(false));
    }
  } catch (err) {
    console.error(err);
  }
};

export default AuthSlice.reducer;
