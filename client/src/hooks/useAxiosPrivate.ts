import { useEffect } from "react";
import { axiosPrivate } from "../redux/axios";
import useRefreshToken from "./useRefreshToken";
import { useAppSelector } from "./redux";

const useAxiosPrivate = () => {
  const token = useAppSelector((state) => state.auth.token);
  const { refreshToken } = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newToken = await refreshToken();
          prevRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [token, refreshToken]);

  return axiosPrivate;
};

export default useAxiosPrivate;
