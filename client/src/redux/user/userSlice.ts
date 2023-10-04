import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createUser } from "./userApi";

interface UserState {
  currentUser: [];
  loading: boolean;
  error: unknown;
}

const initialState: UserState = {
  currentUser: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(createUser.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
