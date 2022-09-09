import axios from "axios";

export const checkoutAction = (token) => (dispatch) => {
  axios
    .get("http://localhost:8000/api/checkout", {
      headers: {
        Authorization: token,
      },
    })
    .then((ress) => {
      dispatch({ type: "SET_DATA_CHECKOUT", value: ress.data.data });
    })
    .catch((err) => console.log("error :", err.message));
};
