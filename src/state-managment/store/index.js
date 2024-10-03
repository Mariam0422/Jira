import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from '../reducers/issuesSlice';
import userReducer from "../reducers/usersSlice";
export const store = configureStore({
    reducer: {
        issues: issuesReducer,
        users: userReducer
    }
});

