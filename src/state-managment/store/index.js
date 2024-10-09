import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../slices/issuesSlice";
import userReducer from "../slices/usersSlice";
import  authUserInfoSlice  from "../slices/authUserInfoSlice.js";
export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    users: userReducer,
    authInfo: authUserInfoSlice,
  },
});
