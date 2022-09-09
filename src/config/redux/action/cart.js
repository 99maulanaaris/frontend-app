import axios from "axios";
import { showMessage } from "../../../utils/showMessage";

const token = localStorage.getItem("token");

export const cartAction = (token) => (dispatch) => {
  axios
    .get("http://localhost:8000/api/cart", {
      headers: {
        Authorization: token,
      },
    })
    .then((ress) => {
      dispatch({ type: "SET_DATA_CART", value: ress.data.data });
    })
    .catch((err) => console.log("error :", err.message));
};

export const addCart = (token, data) => (dispatch) => {
  axios
    .post("http://localhost:8000/api/cart", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((ress) => {
      dispatch({ type: "INSERT_CART", value: ress.data.data });

      showMessage("success", "Success", "Success Insert to Cart");
    })
    .catch((err) => console.log(err.message));
};

export const checkout = (data) => (dispatch) => {
  axios
    .post("http://localhost:8000/api/checkout", data, {
      headers: {
        Authorization: token,
      },
    })
    .then((ress) => {
      showMessage("success", "Success", "Success Insert to Cart");
    })
    .catch((err) => {
      showMessage("error", "Error", err.message);
    });
};
