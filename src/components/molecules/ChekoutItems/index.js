import React from "react";

const CheckoutItems = ({ photo, index, name, lots, costs }) => {
  return (
    <>
      <div
        className="d-flex justify-content-evenly  align-items-center"
        style={{ marginLeft: "-30px" }}
        key={index}
      >
        <span>{index + 1}</span>
        <img src={photo} alt="Gambar" height={100} width={100} />
        <span>{name}</span>
        <span>{lots}</span>
        <span>{costs}</span>
        <span className="badge text-bg-success">Delivered</span>
      </div>
      <hr />
    </>
  );
};

export default CheckoutItems;
