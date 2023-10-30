import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterDataType } from "../../pages/register/schema";
import { LoginDataType } from "../../pages/login/schema";
import { axiosPrivate } from "../axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data: RegisterDataType, thunkApi) => {
    try {
      const res = await axiosPrivate.post("/auth/register", data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data: LoginDataType, thunkApi) => {
    try {
      const res = await axiosPrivate.post("/auth/login", data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
