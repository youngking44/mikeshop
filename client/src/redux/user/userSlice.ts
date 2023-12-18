import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./userApi";
import toast from "react-hot-toast";

interface UserState {
  currentUser: null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  token: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
      })
      // eslint-disable-next-line
      .addCase(createUser.rejected, (state, action: PayloadAction<any>) => {
        toast.error(action.payload?.response?.data?.message);
        state.loading = false;
        state.error = action.payload?.response?.data?.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
      })
      // eslint-disable-next-line
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        toast.error(action.payload?.response?.data?.message);
        state.loading = false;
        state.error = action.payload?.response?.data?.message;
      });
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
