import React from "react";
import { Banner } from "../../../assets/Image";

const Carousel = () => {
  return (
    <div className="ps-5 pe-5">
      <div className="row">
        <div className="col-md-5 p-5 mt-lg-5">
          <h2 className="fs-1 fw-bold">
            Every Purchase <br /> Will Be Made <br /> With Pleasure
          </h2>
          <p className="text-secondary fst-italic fs-5">
            Buying and selling of goods services <br /> using the internet
          </p>
          <div className="btn btn-block btn-info text-light fs-5">
            Checkout Now <i class="bi bi-box-arrow-in-right"></i>
          </div>
        </div>
        <div className="col-md-7 p-4 align-self-center">
          <img src={Banner} alt="gambar" height={400} className="ms-xl-5" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
