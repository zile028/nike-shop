import { createSlice } from "@reduxjs/toolkit";

const sliceUser = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("logedUser", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.user = {};
      localStorage.removeItem("logedUser");
    },
  },
});

export const { login, logout } = sliceUser.actions;
export default sliceUser.reducer;
