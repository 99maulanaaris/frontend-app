import React from "react";
import "./index.css";

const Category = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-75 justify-content-center rounded-pill category">
        <div className="d-flex justify-content-around">
          <div className="btn btn-block text-light button">
            <i class="bi bi-cup-straw"> Food</i>
          </div>
          <div className="btn btn-block text-light button ">
            <i class="bi bi-cup-straw"> Drink</i>
          </div>
          <div className="btn btn-block text-light button ">
            <i class="bi bi-cup-straw">Snack</i>
          </div>
          <div className="btn btn-block text-light button ">
            <i class="bi bi-cup-straw">Apetizer</i>
          </div>
          <div className="btn btn-block text-light button ">
            <i class="bi bi-cup-straw">Salad</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
