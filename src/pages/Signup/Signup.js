import { useFormik } from "formik";
import React from "react";
import { SigninAction, SignupAction } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";

export default function Signup() {
  const dispatch = useDispatch();
  const { message } = useSelector((root) => root.UserReducer);
  console.log(message);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
      const action = SignupAction(value, history);
      dispatch(action);
    },
  });
  return (
    <div className="form-login">
      <div className="image-container">
        <img
          src="https://pt-corp.vn/wp-content/uploads/2023/09/13805027_1904.i402.013.Web-development-isometric-concept-composition-2048x1409.jpg"
          alt="Image"
          style={{ width: "100%" }}
        />
      </div>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <h2>Register</h2>
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              onChange={formik.handleChange}
              id="username"
              name="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={formik.handleChange}
              id="username"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={formik.handleChange}
              id="password"
              name="password"
              required
            />
          </div>
          <div style={{ color: "red" }}>{message}</div>
          <button className="login-button" type="submit">
            Submit
          </button>
          <div style={{ textAlign: "right" }}>Bạn đã có tài khoản? <span style={{cursor:'pointer'}} onClick={()=>{
            history.push('/signin')
          }}>Đăng nhập</span></div>
        </form>
      </div>
    </div>
  );
}
