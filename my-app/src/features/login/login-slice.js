import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userName: "",
  },
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { updateUserName } = loginSlice.actions;

export default loginSlice.reducer;
