import { TIME_FRAME_TYPE } from "../enum";

export const LICENSE_KEY = "license-key";

export const LOGIN_PATH = "/license-key";

export const PUBLIC_PATH_LIST = [LOGIN_PATH];

export const TIME_FRAME_OPTIONS = [
  { label: "This week", value: TIME_FRAME_TYPE.thisWeek },
  { label: "This month", value: TIME_FRAME_TYPE.thisMonth },
  { label: "This year", value: TIME_FRAME_TYPE.thisYear },
];
