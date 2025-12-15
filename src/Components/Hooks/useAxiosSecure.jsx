import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  
  return axiosSecure;
};

export default useAxiosSecure;

//   const { user, logOut } = UseAuth();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     // intercept request
  //     const reqInterceptor = axiosSecure.interceptors.request.use((configs) => {
  //       configs.headers.Authorization = `Bearer ${user?.accessToken}`;
  //       return configs;
  //     });
  //     // intercept response
  //     const resInterceptor = axiosSecure.interceptors.response.use(
  //       (response) => {
  //         return response;
  //       },
  //       (error) => {
  //         console.log(error);
  //         const statusCode = error.response?.status;
  //         if (statusCode === 401 || statusCode === 403) {
  //           logOut().then(() => {
  //             navigate("/login");
  //           });
  //         }
  //         return Promise.reject(error);
  //       }
  //     );
  //     return () => {
  //       axiosSecure.interceptors.request.eject(reqInterceptor);
  //       axiosSecure.interceptors.response.eject(resInterceptor);
  //     };
  //   }, [user, logOut, navigate]);
