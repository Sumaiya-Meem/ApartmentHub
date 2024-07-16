import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://apartment-hub-server.vercel.app",
  baseURL: "https://apartment-hub-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
