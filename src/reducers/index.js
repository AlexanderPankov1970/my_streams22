import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReduser from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReduser,
});
// export default combineReducers({
//   fishkaObxodaOshibki: () => "Hi there",
// });
