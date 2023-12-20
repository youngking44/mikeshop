import { useState } from "react";
import { axiosPrivate } from "../redux/axios";
import { setAuth } from "../redux/user/authSlice";
import { useAppDispatch } from "./redux";

const useRefreshToken = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const refreshToken = async () => {
    try {
      const res = await axiosPrivate.get("auth/refresh");
      dispatch(setAuth(res.data));
      return res.data;
    } catch (err) {
      dispatch(setAuth(null));
    } finally {
      setLoading(false);
    }
  };

  return { refreshToken, loading };
};

export default useRefreshToken;
