import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../../assets/Image";
import { CheckoutItems, Navbar } from "../../components";
import { checkoutAction } from "../../config/redux/action/checkout";

const Checkout = () => {
  const { checkout } = useSelector((state) => state.checkoutReducer);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkoutAction(token));
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-2 p-lg-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              <div className="card-body">
                <h2>List Items</h2>
                {checkout.map((items, index) => {
                  return (
                    <CheckoutItems
                      photo={`http://localhost:8000/storage/${items.product.photo}`}
                      name={items.product.name}
                      index={index}
                      lots={items.lots}
                      costs={items.costs}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
