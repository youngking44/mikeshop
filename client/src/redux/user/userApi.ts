import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataType } from "../../pages/register/schema";

const BASE_URL = "http://localhost:3000";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data: DataType, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
