import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const OrderList = ({ gambar, jumlah, harga }) => {
  const [count, setCount] = useState(jumlah);

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
    <>
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <img src={gambar} style={{ maxWidth: "100px", maxHeight: "100px" }} />
        </div>
        <div className="col">
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
        <div className="col">
          <span className="fs-6 ">Rp. {harga}</span>
        </div>
      </div>
    </>
  );
};

export default OrderList;
