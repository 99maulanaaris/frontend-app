import React from "react";
import { CartEmpty } from "../../../assets/Image";
import Navbar from "../Navbar";

const EmptyCart = () => {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <h3>Sorry Cannot Product at Cart !!!</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img src={CartEmpty} alt="Empty" height={500} width={800} />
      </div>
    </div>
  );
};

export default EmptyCart;
