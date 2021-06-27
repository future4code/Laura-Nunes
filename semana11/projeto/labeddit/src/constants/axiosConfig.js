export const axiosConfig = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
