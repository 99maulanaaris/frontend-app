import axios from "axios";

const API_HOST = {
  url: "http://localhost:8000/api",
};

export const productsAction = () => (dispatch) => {
  axios
    .get(`${API_HOST.url}/product`)
    .then((ress) => {
      dispatch({ type: "GET_DATA_PRODUCT", value: ress.data.data });
    })
    .catch((err) => console.log("error :", err.message));
};
