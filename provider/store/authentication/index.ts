import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType, AuthUserType } from "./authentication.type";
import { authApi } from "./api";
// import { DASHBOARD_TABS } from "@/lib/constant";

const initialState: AuthType = {
  loading: false,
  authenticated: false,
  licenseKey: "",
  profile: {} as AuthUserType,
  authCheck: false,
  //   redirectTo: DASHBOARD_TABS.ACCOUNT_MANAGER,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Partial<AuthType>>) => {
      return { ...state, ...action.payload };
    },
    resetAuthData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.validateToken.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(authApi.endpoints.validateToken.matchFulfilled, (state) => {
        state.loading = false;
      })
      .addMatcher(authApi.endpoints.validateToken.matchRejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setAuthData, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
