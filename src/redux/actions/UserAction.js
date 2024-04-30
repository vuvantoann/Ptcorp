import { http } from "../../utils/response";

export const SigninAction = (value, history) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/user/login", value);
      console.log(result.data.data.user.username);
      const action = {
        type: "SIGNIN",
        username: result.data.data.user.username,
        message: "",
      };
      dispatch(action);
      localStorage.setItem('userID',result.data.data.user.id)
      localStorage.setItem('username',result.data.data.user.username)
      history.push("/");
    } catch (error) {
      const action = {
        type: "SIGNIN_ERROR",
        message: error.response.data.message,
      };
      dispatch(action);
    }
  };
};


export const SignupAction = (value, history) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/user/register", value);
      const action = {
        type: "SIGNUP",
        message: "",
      };
      dispatch(action);
      history.push("/signin");
    } catch (error) {
      const action = {
        type: "SIGNIN_ERROR",
        message: error.response.data.message,
      };
      dispatch(action);
    }
  };
};
