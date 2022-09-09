import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartAction } from "../../../config/redux/action/cart";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const signOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    dispatch(cartAction(token));
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/checkout">
                  Checkout
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Delivery
                </a>
              </li>
            </ul>
            <div
              className="position-relative btn btn-block btn-outline-info"
              onClick={() => navigate("/cart", { replace: true })}
              style={{
                marginRight: "30px",
                paddingTop: "10px",
                marginTop: "5px",
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </div>
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={signOut}
            >
              SignOut
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
