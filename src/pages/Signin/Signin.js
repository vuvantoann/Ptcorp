import { useFormik } from "formik";
import React from "react";
import { SigninAction } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";

export default function Signin() {
  const dispatch = useDispatch();
  const {message} = useSelector(root =>root.UserReducer)
  console.log(message)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
      const action = SigninAction(value, history);
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
          <h2>Login</h2>
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
          <div style={{color:'red'}}>{message}</div>
          <button className="login-button" type="submit">
            Login
          </button>
          <div style={{ textAlign: "right", cursor:'pointer' }} onClick={()=>{
            history.push('/signup')
          }}>Tạo tài khoản?</div>
        </form>
      </div>
    </div>
  );
}
