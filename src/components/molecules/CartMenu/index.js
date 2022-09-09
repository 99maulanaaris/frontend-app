import React from "react";
import { OrderList } from "../../atoms";

const CartMenu = ({ gambar, jumlah, harga }) => {
  return (
    <div className="row">
      <div className="col-md-6 w-100 p-lg-3">
        <OrderList gambar={gambar} jumlah={jumlah} harga={harga} />
      </div>
    </div>
  );
};

export default CartMenu;
