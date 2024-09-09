import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "../services/login";
import authReducer from "../features/auth/auth-slice";
import loginReducer from "../features/login/login-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(loginApi.middleware),
});

setupListeners(store.dispatch);
