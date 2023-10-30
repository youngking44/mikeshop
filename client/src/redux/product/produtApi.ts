import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../axios";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkApi) => {
    try {
      const res = await axiosPrivate.get("/products");
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
