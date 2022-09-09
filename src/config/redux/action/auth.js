import axios from "axios";
import Swal from "sweetalert2";
import { setLoding } from "./global";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const API_HOST = {
  url: "http://localhost:8000/api",
};

export const registerAction = () => {};

export const loginAction = (form, navigate) => (dispatch) => {
  axios
    .post(`${API_HOST.url}/login`, form)
    .then((ress) => {
      const token = `${ress.data.data.token_type} ${ress.data.data.access_token}`;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(ress.data.data.user));
      Toast.fire({
        icon: "success",
        title: "Login is successfully",
      });
      dispatch(setLoding(false));
      navigate("/", { replace: true });
    })
    .catch((err) => {
      dispatch(setLoding(false));
      Toast.fire({
        icon: "error",
        title: "Email or Password Wrong",
      });
    });
};
