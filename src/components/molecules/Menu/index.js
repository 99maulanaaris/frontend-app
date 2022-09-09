import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";

const Menu = ({
  id,
  name,
  photo,
  rating,
  price,
  description,
  data,
  getData,
}) => {
  const [count, setCount] = useState(0);

  const newData = {
    productId: data.id,
    lots: count === 0 ? count + 1 : count,
    costs: count === 0 ? count + 1 * price : price * count,
  };

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
    return count;
  };

  return (
    <div key={id} className="col-md-3 col-sm-4 col-xs-6 mb-4">
      <div
        className="card"
        style={{
          borderRadius: "18px",
          boxShadow: " 7px 7px 14px #8d8d8d,-7px -7px 14px #ffffff",
        }}
      >
        <img src={photo} className="card-img-top" alt="gambar" />
        <div className="card-body">
          <h6 className="card-title text-center">{name}</h6>
          <small className="card-text text-secondary">{description}</small>
          <div className="d-flex justify-content-between mb-4 mt-4">
            <h6>{rating}</h6>
            <strong>Rp.{price}</strong>
          </div>
          <div className="d-flex justify-content-center">
            <div>
              <span
                style={{
                  cursor: "pointer",
                  marginRight: "20px",
                  marginLeft: "15px",
                }}
              >
                <FontAwesomeIcon icon={faPlus} onClick={handlePlus} />
              </span>
              <span className="fs-5">{count}</span>
              <span
                style={{ cursor: "pointer", marginLeft: "20px" }}
                onClick={handleMinus}
              >
                <FontAwesomeIcon icon={faMinus} />
              </span>
            </div>
          </div>
          <button
            data-value={data}
            className="btn btn-block btn-outline-info mt-4"
            onClick={() => getData(newData)}
          >
            Add Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
