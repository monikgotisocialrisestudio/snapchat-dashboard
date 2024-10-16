import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Import reducers
// import globalReducer from "./global";
// import accountManagerReducer from "./dashboard/account-manager";
import authReducer from "./authentication";
// import presetReducer from "./dashboard/preset";
// import activeRunReducer from "./dashboard/active-run";

// Import API slices
// import { accountManagerApi } from "./dashboard/account-manager/api";
import { authApi } from "./authentication/api";
// import { presetApi } from "./dashboard/preset/api";
// import { activeRunApi } from "./dashboard/active-run/api";

const store = configureStore({
  reducer: {
    // global: globalReducer,
    // accountManager: accountManagerReducer,
    authentication: authReducer,
    // preset: presetReducer,
    // activeRun: activeRunReducer,
    // [accountManagerApi.reducerPath]: accountManagerApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    // [presetApi.reducerPath]: presetApi.reducer,
    // [activeRunApi.reducerPath]: activeRunApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      //   accountManagerApi.middleware,
      authApi.middleware
      //   presetApi.middleware,
      //   activeRunApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
