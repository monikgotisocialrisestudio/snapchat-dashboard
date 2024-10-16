export interface AuthUserType {
  id: number;
  created_at: string;
  email: string;
  license_key: string;
  quota: number;
  raw_quota: number;
  role: string;
}

export interface AuthType {
  loading: boolean;
  authenticated: boolean;
  licenseKey: string;
  profile: AuthUserType;
  //   redirectTo: string;
  authCheck: boolean;
}
