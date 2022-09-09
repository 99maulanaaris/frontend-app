import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CartMenu, EmptyCart, FormInput, Navbar } from "../../components";
import { cartAction, checkout } from "../../config/redux/action/cart";
import { useForm } from "../../utils";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [form, setForm] = useForm({
    cartId: "",
    name: "",
    address: "",
    note: "",
    courier: "",
    shippingCost: 25000,
    totalCost: 0,
  });

  const navigate = useNavigate();

  const total = cart.reduce((result, item) => {
    return result + item.costs;
  }, 0);

  const cartId = cart.map((item) => {
    return item.cart_id;
  });

  const cekToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
  };

  const hapusToken = () => {
    setInterval(() => {
      localStorage.clear();
    }, 600000);
  };

  const onSubmite = () => {
    form.totalCost = total + form.shippingCost;
    form.cartId = cartId[0];
    dispatch(checkout(form, token));
  };

  console.log(cart);

  useEffect(() => {
    dispatch(cartAction(token));
    hapusToken();
    cekToken();
  }, []);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-12 mb-lg-5">
            <div className="card p-lg-3">
              <div className="card-body">
                <div className="card-title">
                  <strong className="fs-1 fw-bold">Shopping Cart</strong>
                </div>
                <small className="text-secondary fst-italic">Home / Cart</small>
              </div>
              <div className="row p-lg-4">
                <div className="col-md-8">
                  <FormInput
                    label="Name"
                    placeholder="Masukan Nama Anda"
                    type="text"
                    onChange={(e) => setForm("name", e.target.value)}
                  />
                  <FormInput
                    label="Address"
                    type="text"
                    placeholder="Masukan Alamat Anda"
                    onChange={(e) => setForm("address", e.target.value)}
                  />
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Note
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => setForm("note", e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Courier
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) => setForm("courier", e.target.value)}
                    >
                      <option selected value="select">
                        Select Courier
                      </option>
                      <option value="jne">JNE</option>
                      <option value="jnt">JNT</option>
                      <option value="express">Express</option>
                    </select>
                  </div>
                  <div className="mb-3 ">
                    <button
                      type="submit"
                      onClick={onSubmite}
                      className="btn btn-block btn-outline-info"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card">
                    <div className="card-body">
                      <strong>Your Order</strong>
                      <hr />
                      <div
                        className=""
                        style={{
                          overflowY: "scroll",
                          overflowX: "hidden",
                          maxHeight: "350px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cart.map((items, i) => {
                          return (
                            <CartMenu
                              key={i}
                              gambar={`http://localhost:8000/storage/${items["product"].photo}`}
                              jumlah={items.lots}
                              harga={items["product"].price * items.lots}
                            />
                          );
                        })}
                      </div>
                      <hr
                        className="w-75 border border-2 border-dark"
                        style={{
                          marginLeft: "100px",
                        }}
                      />
                      <div className="d-flex justify-content-end ">
                        <span className="fs-6  me-5">Ongkir :</span>
                        <span className="fs-6 me-lg-4">Rp. 25.000</span>
                      </div>
                      <div className="d-flex justify-content-end ">
                        <span
                          className="fs-6 fw-bold mt-2"
                          style={{ marginRight: "40px" }}
                        >
                          Jumlah :
                        </span>
                        <span className="fs-6 fw-bold me-lg-4 mt-2">
                          <span className="fs-6 fw-bold mt-2">
                            Rp. {total + 25000}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
