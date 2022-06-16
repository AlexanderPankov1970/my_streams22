import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignIn: null,
  userId: null,
};

//VAR MINE
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};
export default authReducer;

//VAR FROM COURSE
// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return {
//         ...state,
//         isSignIn: true,
//         userId: action.payload,
//       };
//     case SIGN_OUT:
//       return {
//         ...state,
//         isSignIn: false,
//       };
//     default:
//       return state;
//   }
// };
