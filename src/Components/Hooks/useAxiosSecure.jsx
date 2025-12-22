import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://book-curier-server.vercel.app",
});
const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // intercept request
    const reqInterceptor = axiosSecure.interceptors.request.use((configs) => {
      configs.headers.Authorization = `Bearer ${user?.accessToken}`;
      return configs;
    });
    // intercept response
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        const statusCode = error.response?.status;
        if (statusCode === 401 || statusCode === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
