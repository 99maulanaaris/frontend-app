import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Banner1, Logo } from "../../assets/Image";
import { loginAction } from "../../config/redux/action/auth";
import { IsLogin } from "../../config/redux/action/global";
import { useForm } from "../../utils";

const Login = () => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cekToken = () => {
    const token = localStorage.getItem("token");
    if (token) return navigate("/");
  };

  const onSubmite = () => {
    dispatch(loginAction(form, navigate));
    setForm("reset");
    dispatch(IsLogin(true));
  };

  useEffect(() => {
    cekToken();
  });

  return (
    <div className="wrapper-login" style={{ display: "flex", height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center ">
        <img src={Banner1} alt="" style={{ maxWidth: "700px" }} />
      </div>
      <div className="input-form bg-info" style={{ flex: 1 }}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={Logo} alt="Logo" height={150} width={150} />
          <h5>Login Your Account for Access this Website</h5>
        </div>
        <div className="p-lg-5">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={(value) => setForm("email", value.target.value)}
              id="exampleFormControlInput1"
              placeholder="Input Your Email"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(value) => setForm("password", value.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Input Your Password"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-block"
            onClick={onSubmite}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
