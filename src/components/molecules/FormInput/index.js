import React from "react";

const FormInput = ({ label, type, placeholder, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
